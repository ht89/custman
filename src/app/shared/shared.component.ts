import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../customers/customer.interface';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
    selector: 'app-shared',
    template: ''
})
export class SharedComponent implements OnInit {
    collection: AngularFirestoreCollection<{}>;
    document: AngularFirestoreDocument<{}>;

    documents: Observable<{}[]>;

    editedDocument = {};

    tableCols: any[] = [];

    showDialog = false;
    dialogTitle = '';

    constructor(public db: AngularFirestore,
        public confirmationService: ConfirmationService) { }

    ngOnInit() {
    }

    openModificationDialog(title: string, document?: any) {
        this.dialogTitle = title;
        this.showDialog = true;
    }

    saveModification(document: any, collectionType: string) {
        console.log(document);
        if (!document.id) {
            this.addDocument(document);
        } else {
            this.editDocument(document, collectionType);
        }

        this.showDialog = false;
    }

    addDocument(document: any) {
        // This prevents the empty id being added to the collection
        delete document.id;
        this.collection.add(document);
    }

    editDocument(document: any, collectionType: string) {
        this.document = this.db.doc<Customer>(`${collectionType}/${document.id}`);
        this.document.update(document);
    }

    deleteDocument(document: any, collectionType: string) {
        this.confirmationService.confirm({
            message: `Are you sure you want to delete ${document.name} ?`,
            accept: () => {
                this.document = this.db.doc<Customer>(`${collectionType}/${document.id}`);
                this.document.delete();
            }
        });
    }
}
