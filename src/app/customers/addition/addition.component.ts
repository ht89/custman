import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../customer.interface';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-addition',
    templateUrl: './addition.component.html',
    styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
    additionForm: FormGroup;
    matcher: any;

    constructor(private dialogRef: MatDialogRef<AdditionComponent>,
        private fb: FormBuilder) { }

    ngOnInit() {
        this.additionForm = this.fb.group({
            name: ['', [Validators.pattern(/\D+/)]],
            phoneNum: ['', [Validators.pattern(/\d+/)]],
            address: ['', [Validators.pattern(/\D+/)]]
        });
    }

    closeDialog() {
        this.dialogRef.close();
    }

    add(model: Customer, isValid: boolean) {
        console.log(model, isValid);

        this.dialogRef.close(model);
    }
}
