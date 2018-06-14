import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Product } from './product.interface';
import { map } from 'rxjs/operators';
import { SharedComponent } from '../shared/shared.component';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends SharedComponent implements OnInit {

    constructor(public db: AngularFirestore,
        public confirmationService: ConfirmationService) {
        super(db, confirmationService);
    }

    ngOnInit() {
        this.collection = this.db.collection<Product>('products');
        this.documents = this.collection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Product;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );

        this.tableCols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'price', header: 'Price' },
            { field: 'modification', header: 'Edit / Delete' }
        ];
    }
}
