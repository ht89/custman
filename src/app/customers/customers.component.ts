import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { MatDialog } from '@angular/material/dialog';
import { Customer } from './customer.interface';
import { ModificationComponent } from './modification/modification.component';
import { map } from 'rxjs/operators';
import { CustomerId } from './customer-id.interface';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';

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

    edittedCustomer: CustomerId;

    cols: any[];

    showDialog = false;
    dialogTitle = '';

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

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'phoneNum', header: 'Phone Number' },
            { field: 'address', header: 'Address' },
            { field: 'modification', header: 'Edit / Delete' }
        ];
    }

    openDialog(title: string, customer?: any) {
        this.dialogTitle = title;
        this.showDialog = true;

        if (customer) {
            this.edittedCustomer = customer;
        } else {
            this.edittedCustomer = null;
        }
    }

    saveModification(customer: any) {
        console.log(customer);
        if (!customer.id) {
            this.addCustomer(customer);
        } else {
            this.editCustomer(customer);
        }

        this.showDialog = false;
    }

    addCustomer(customer: Customer) {
        this.customersCollection.add(customer);
    }

    editCustomer(customer: CustomerId) {
        this.customersDocument = this.db.doc<Customer>(`customers/${customer.id}`);
        this.customersDocument.update(customer);
    }

    deleteCustomer(customer: CustomerId) {
        const confirmationDialogRef = this.dialog.open(DeleteConfirmationComponent, {
            data: {
                name: customer.name
            }
        });

        confirmationDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.customersDocument = this.db.doc<Customer>(`customers/${customer.id}`);
                this.customersDocument.delete();
            }
        });

    }
}
