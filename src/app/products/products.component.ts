import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from './product.interface';
import { map } from 'rxjs/operators';
import { SharedComponent } from '../shared/shared.component';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { QuestionBase } from '../shared/dynamic-form/control/question-base';
import { TextboxQuestion } from '../shared/dynamic-form/control/question-textbox';
import { Validators } from '@angular/forms';
import { ProductId } from './product-id.interface';
import { DropdownQuestion } from '../shared/dynamic-form/control/question-dropdown';
import { ProductSize } from '../orders/product-size.interface';
import { ProductSizeId } from '../orders/product-size-id.interface';
import { AutocompleteQuestion } from '../shared/dynamic-form/control/question-autocomplete';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends SharedComponent implements OnInit {
  questions: QuestionBase<any>[];

  private productSizeCollection: AngularFirestoreCollection<ProductSize>;
  productSizes: ProductSizeId[];

  private productCollection: AngularFirestoreCollection<Product>;
  products: ProductId[];

  constructor(public db: AngularFirestore,
    public confirmationService: ConfirmationService) {
    super(db, confirmationService);
  }

  ngOnInit() {
    this.collection = this.db.collection<Product>('products', ref => ref.orderBy(this.sortField));
    this.documents = this.collection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.tableCols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'price', header: 'Price' },
      { field: 'modification', header: 'Edit / Delete' }
    ];

    this.sortFields = [
      { label: 'Name', value: 'name' },
      { label: 'Size', value: 'size' },
      { label: 'Price', value: 'price' }
    ];

    this.productSizeCollection = this.db.collection<ProductSize>('product-sizes', ref => ref.orderBy('name'));
    this.productCollection = this.db.collection<Product>('products', ref => ref.orderBy('name'));

    this.productSizeCollection.snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as ProductSize;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      )
      .subscribe(productSizes => {
        this.productSizes = productSizes;

        this.productCollection.snapshotChanges()
          .pipe(
            map(actions => actions.map(a => {
              const data = a.payload.doc.data() as Product;
              const id = a.payload.doc.id;
              return { id, ...data };
            }))
          )
          .subscribe(products => {
            this.products = products;

            const productNames = Array.from(new Set(this.products.map(product => product.name)));

            const options = [];

            this.productSizes.forEach(productSize => {
              options.push({
                label: productSize.name,
                value: productSize.name
              });
            });

            this.questions = [
              new TextboxQuestion({
                key: 'id',
                label: 'ID',
                value: '',
                hidden: true,
              }),

              new AutocompleteQuestion({
                key: 'name',
                label: 'Name',
                value: '',
                list: productNames,
                searchField: 'name',
                validation: [Validators.pattern(/\D+/)],
                validationMsg: 'Should not contain numbers',
              }),

              new DropdownQuestion({
                key: 'size',
                label: 'Size',
                options: options,
                validation: [Validators.required]
              }),

              new TextboxQuestion({
                key: 'price',
                label: 'Price',
                value: '',
                validation: [Validators.pattern(/\d+/)],
                validationMsg: 'Should not contain words',
              }),
            ];
          });
      });
  }

  openModificationDialog(dialogTitle: string, document?: ProductId) {
    if (document) {
      this.questions[0].value = document.id;
      this.questions[1].value = document.name;
      this.questions[2].value = document.size;
      this.questions[3].value = document.price;
    } else {
      this.questions[1].value = '';
      this.questions[2].value = '';
      this.questions[3].value = '';
    }

    this.questions = [...this.questions];

    super.openModificationDialog(dialogTitle);
  }
}
