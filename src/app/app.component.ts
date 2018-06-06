import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    customers: Observable<any[]>;

    constructor(private db: AngularFirestore) {
        this.customers = db.collection('customers').valueChanges();
    }
}