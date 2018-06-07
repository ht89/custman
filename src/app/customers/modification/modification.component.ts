import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
        private fb: FormBuilder) { }

    ngOnInit() {
        this.modForm = this.fb.group({
            name: ['', [Validators.pattern(/\D+/)]],
            phoneNum: ['', [Validators.pattern(/\d+/)]],
            address: ['', [Validators.pattern(/\D+/)]]
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
