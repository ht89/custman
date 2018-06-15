import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Customer } from './customer.interface';
import { map } from 'rxjs/operators';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { SharedComponent } from '../shared/shared.component';
import { QuestionBase } from '../shared/dynamic-form/control/question-base';
import { TextboxQuestion } from '../shared/dynamic-form/control/question-textbox';
import { Validators } from '@angular/forms';
import { CustomerId } from './customer-id.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomersComponent extends SharedComponent implements OnInit {
    questions: QuestionBase<any>[];

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
            { field: 'phoneNum', header: 'Phone' },
            { field: 'address', header: 'Address' },
            { field: 'modification', header: 'Edit / Delete' }
        ];

        this.sortFields = [
            { label: 'Name', value: 'name' },
            { label: 'Address', value: 'address' }
        ];

        this.questions = [
            new TextboxQuestion({
                key: 'id',
                label: 'ID',
                value: '',
                hidden: true
            }),

            new TextboxQuestion({
                key: 'name',
                label: 'Name',
                value: '',
                validation: [Validators.pattern(/\D+/)],
                validationMsg: 'Should not contain numbers'
            }),

            new TextboxQuestion({
                key: 'phoneNum',
                label: 'Phone number',
                value: '',
                validation: [Validators.pattern(/\d+/)],
                validationMsg: 'Should not contain words'
            }),

            new TextboxQuestion({
                key: 'address',
                label: 'Address',
                value: '',
                validation: [Validators.pattern(/\D+/)],
                validationMsg: 'Should not contain numbers'
            }),
        ];
    }

    openModificationDialog(dialogTitle: string, document?: CustomerId) {
        if (document) {
            this.questions[0].value = document.id;
            this.questions[1].value = document.name;
            this.questions[2].value = document.phoneNum;
            this.questions[3].value = document.address;
        } else {
            this.questions[1].value = '';
            this.questions[2].value = '';
            this.questions[3].value = '';
        }

        this.questions = [...this.questions];

        super.openModificationDialog(dialogTitle);
    }

    onSortFieldChange() {
        console.log('sort field changed');
        this.collection = this.db.collection('customers', ref => ref.orderBy(this.sortField));
        this.documents = this.collection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Customer;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }
}
