import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers/customer.interface';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { CustomerId } from '../customers/customer-id.interface';
import { map } from 'rxjs/operators';

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
  }

  searchCustomer(event) {
    console.log(event.query);

    this.filteredCustomers = [];
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].name.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredCustomers.push(this.customers[i]);
      }
    }

  }

}
