import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { MatDialog } from '@angular/material/dialog';
import { AdditionComponent } from './addition/addition.component';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
    customers: Observable<any[]>;

    columnsToDisplay = ['number', 'phoneNum', 'address'];

    constructor(private db: AngularFirestore,
        private dialog: MatDialog) { }

    ngOnInit() {
        this.customers = this.db.collection('customers').valueChanges();
    }

    openAdditionDialog() {
        const additionDialogRef = this.dialog.open(AdditionComponent, {});

        additionDialogRef.afterClosed().subscribe(result => {
            console.log('The addition dialog is closed');
        });
    }

}
