import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
    customers: Observable<any[]>;

    columnsToDisplay = ['number', 'phoneNum', 'address'];

    constructor(private db: AngularFirestore) { }

    ngOnInit() {
        this.customers = this.db.collection('customers').valueChanges();
    }

}
