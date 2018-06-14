import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Customer } from './customer.interface';
import { map } from 'rxjs/operators';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { SharedComponent } from '../shared/shared.component';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomersComponent extends SharedComponent implements OnInit {

    constructor(public db: AngularFirestore,
        public confirmationService: ConfirmationService) {
        super(db, confirmationService);
    }

    ngOnInit() {
        this.collection = this.db.collection<Customer>('customers');
        this.documents = this.collection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Customer;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );

        this.tableCols = [
            { field: 'name', header: 'Name' },
            { field: 'phoneNum', header: 'Phone Number' },
            { field: 'address', header: 'Address' },
            { field: 'modification', header: 'Edit / Delete' }
        ];
    }
}
