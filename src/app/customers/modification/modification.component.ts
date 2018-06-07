import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../customer.interface';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-modification',
    templateUrl: './modification.component.html',
    styleUrls: ['./modification.component.scss']
})
export class ModificationComponent implements OnInit {
    modForm: FormGroup;
    matcher: any;

    constructor(private dialogRef: MatDialogRef<ModificationComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Object,
        private fb: FormBuilder) { }

    ngOnInit() {
        this.modForm = this.fb.group({
            name: [this.data['customer'] ? this.data['customer'].name : '', [Validators.pattern(/\D+/)]],
            phoneNum: [this.data['customer'] ? this.data['customer'].phoneNum : '', [Validators.pattern(/\d+/)]],
            address: [this.data['customer'] ? this.data['customer'].address : '', [Validators.pattern(/\D+/)]]
        });
    }

    closeDialog() {
        this.dialogRef.close();
    }

    save(model: Customer, isValid: boolean) {
        console.log(model, isValid);

        this.dialogRef.close(model);
    }
}
