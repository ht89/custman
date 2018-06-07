import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { MatDialog } from '@angular/material/dialog';
import { AdditionComponent } from './addition/addition.component';
import { Customer } from './customer.interface';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
    private customersCollection: AngularFirestoreCollection<Customer>;
    customers: Observable<Customer[]>;

    columnsToDisplay = ['number', 'name', 'phoneNum', 'address'];

    constructor(private db: AngularFirestore,
        private dialog: MatDialog) { }

    ngOnInit() {
        this.customersCollection = this.db.collection<Customer>('customers');
        this.customers = this.customersCollection.valueChanges();
    }

    openAdditionDialog() {
        const additionDialogRef = this.dialog.open(AdditionComponent, {
            width: '500px'
        });

        additionDialogRef.afterClosed().subscribe(result => {
            console.log('The addition dialog is closed', result);
            this.addCustomer(result);
        });
    }

    addCustomer(customer: Customer) {
        this.customersCollection.add(customer);
    }
}
