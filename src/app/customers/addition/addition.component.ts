import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../customer.interface';

@Component({
    selector: 'app-addition',
    templateUrl: './addition.component.html',
    styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
    submitted = false;
    model: Customer = {
        id: null,
        name: '',
        phoneNum: null,
        address: ''
    };

    constructor(private dialogRef: MatDialogRef<AdditionComponent>) { }

    ngOnInit() {
    }

    closeDialog() {
        this.dialogRef.close();
    }

    add() {
        this.dialogRef.close(this.model);
    }

    get diagnostic() { return JSON.stringify(this.model); }
}
