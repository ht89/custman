import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ModificationComponent } from './modification/modification.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatIconModule,
        TableModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        ConfirmDialogModule
    ],
    exports: [],
    declarations: [CustomersComponent, ModificationComponent],
    providers: [ConfirmationService],
    entryComponents: [ModificationComponent]
})
export class CustomersModule { }
