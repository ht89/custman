import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../customers/customer.interface';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
    selector: 'app-shared'
})
export class SharedComponent implements OnInit {
    collection: AngularFirestoreCollection<{}>;
    document: AngularFirestoreDocument<{}>;

    documents: Observable<{}[]>;

    editedDocument = {};

    tableCols: any[] = [];

    showDialog = false;
    dialogTitle = '';

    constructor(private db: AngularFirestore,
        private confirmationService: ConfirmationService) { }

    ngOnInit() {
    }

    openModificationDialog(title: string, document?: any) {
        this.dialogTitle = title;
        this.showDialog = true;

        if (document) {
            this.editedDocument = document;
        } else {
            this.editedDocument = null;
        }
    }

    saveModification(document: any) {
        if (!document.id) {
            this.addDocument(document);
        } else {
            this.editDocument(document);
        }

        this.showDialog = false;
    }

    addDocument(document: any) {
        // This prevents the empty id being added to the collection
        delete document.id;
        this.collection.add(document);
    }

    editDocument(document: any) {
        this.document = this.db.doc<Customer>(`customers/${document.id}`);
        this.document.update(document);
    }

    deleteCustomer(document: any) {
        this.confirmationService.confirm({
            message: `Are you sure you want to delete ${document.name} ?`,
            accept: () => {
                this.document = this.db.doc<Customer>(`customers/${document.id}`);
                this.document.delete();
            }
        });
    }
}
