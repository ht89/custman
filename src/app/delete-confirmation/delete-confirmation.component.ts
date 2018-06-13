import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-delete-confirmation',
    templateUrl: './delete-confirmation.component.html',
    styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: Object,
        private dialogRef: MatDialogRef<DeleteConfirmationComponent>) { }

    ngOnInit() {

    }

    onButtonClick(confirmDelete = false) {
        this.dialogRef.close(confirmDelete);
    }
}
