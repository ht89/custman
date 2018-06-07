import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { MatDialog } from '@angular/material/dialog';
import { Customer } from './customer.interface';
import { ModificationComponent } from './modification/modification.component';
import { map } from 'rxjs/operators';
import { CustomerId } from './customer-id.interface';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomersComponent implements OnInit {
    private customersCollection: AngularFirestoreCollection<Customer>;
    private customersDocument: AngularFirestoreDocument<Customer>;
    customers: Observable<Customer[]>;

    columnsToDisplay = ['number', 'name', 'phoneNum', 'address', 'modification'];

    constructor(private db: AngularFirestore,
        private dialog: MatDialog) { }

    ngOnInit() {
        this.customersCollection = this.db.collection<Customer>('customers');
        this.customers = this.customersCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Customer;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    openAdditionDialog() {
        const additionDialogRef = this.dialog.open(ModificationComponent, {
            width: '500px',
            data: {
                title: 'Add customer'
            }
        });

        additionDialogRef.afterClosed().subscribe(result => {
            console.log('The addition dialog is closed', result);

            if (result) {
                this.addCustomer(result);
            }
        });
    }

    openEditDialog(customer: CustomerId) {
        const editDialogRef = this.dialog.open(ModificationComponent, {
            width: '500px',
            data: {
                title: 'Edit customer',
                customer: customer
            }
        });

        editDialogRef.afterClosed().subscribe(result => {
            console.log('The edit dialog is closed', result);

            if (result) {
                this.editCustomer(result);
            }
        });
    }

    addCustomer(customer: Customer) {
        this.customersCollection.add(customer);
    }

    editCustomer(customer: CustomerId) {
        this.customersDocument = this.db.doc<Customer>(`customers/${customer.id}`);
        this.customersDocument.update(customer);
    }
}
