import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Product } from './product.interface';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { ProductId } from './product-id.interface';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    private productsCollection: AngularFirestoreCollection<Product>;
    private productsDocument: AngularFirestoreDocument<Product>;

    products: Observable<Product[]>;
    cols: any[];

    dialogTitle = '';
    showDialog = false;

    edittedProduct: ProductId;


    constructor(private db: AngularFirestore) { }

    ngOnInit() {
        this.productsCollection = this.db.collection<Product>('products');
        this.products = this.productsCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Product;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'price', header: 'Price' },
            { field: 'modification', header: 'Edit / Delete' }
        ];
    }
}
