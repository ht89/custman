import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers/customer.interface';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { CustomerId } from '../customers/customer-id.interface';
import { map } from 'rxjs/operators';
import { Product } from '../products/product.interface';
import { ProductSize } from './product-size.interface';
import { ProductSizeId } from './product-size-id.interface';
import { ProductId } from '../products/product-id.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  private customerCollection: AngularFirestoreCollection<Customer>;
  customers: CustomerId[];
  filteredCustomers: CustomerId[];
  customer: CustomerId;

  private productCollection: AngularFirestoreCollection<Product>;
  products: Product[];
  product: string;
  filteredProductNames: String[];
  productNames = [];

  private productSizeCollection: AngularFirestoreCollection<ProductSize>;
  productSizes: ProductSize[];
  selectedSize: ProductSizeId;

  constructor(private readonly afs: AngularFirestore) { }

  ngOnInit() {
    this.customerCollection = this.afs.collection<Customer>('customers');

    this.customerCollection.snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Customer;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      )
      .subscribe(customers => {
        this.customers = customers;
      });

    this.productCollection = this.afs.collection<Product>('products');

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

        this.productNames = Array.from(new Set(this.products.map(product => product.name)));
      });

    this.productSizeCollection = this.afs.collection<ProductSize>('product-sizes', ref => ref.orderBy('name'));

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
      });
  }

  searchCustomer(event) {
    this.filteredCustomers = [];
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].name.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredCustomers.push(this.customers[i]);
      }
    }

  }

  searchProduct(event) {
    this.filteredProductNames = [];
    for (let i = 0; i < this.productNames.length; i++) {
      if (this.productNames[i].toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredProductNames.push(this.productNames[i]);
      }
    }

  }

  selectSize(size: ProductSizeId) {
    this.selectedSize = size;
    console.log(size);
  }
}
