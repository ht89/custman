import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-addition',
    templateUrl: './addition.component.html',
    styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<AdditionComponent>) { }

    ngOnInit() {
    }

    closeDialog() {
        this.dialogRef.close();
    }

}
