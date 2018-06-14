import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Customer } from '../customer.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerId } from '../customer-id.interface';

@Component({
    selector: 'app-modification',
    templateUrl: './modification.component.html',
    styleUrls: ['./modification.component.scss']
})
export class ModificationComponent implements OnInit, OnChanges {
    modForm: FormGroup;
    matcher: any;

    @Input() customer: CustomerId;

    @Output() saveModification = new EventEmitter<CustomerId>();

    @Output() closeDialog = new EventEmitter<any>();

    constructor(private fb: FormBuilder) { }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['customer']) {
            this.modForm = this.fb.group({
                id: [this.customer ? this.customer.id : ''],
                name: [this.customer ? this.customer.name : '', [Validators.pattern(/\D+/), Validators.required]],
                phoneNum: [this.customer ? this.customer.phoneNum : '', [Validators.pattern(/\d+/), Validators.required]],
                address: [this.customer ? this.customer.address : '', [Validators.pattern(/\D+/), Validators.required]]
            });
        }
    }

    save(model: Customer & CustomerId, isValid: boolean) {
        this.saveModification.emit(model);
    }
}
