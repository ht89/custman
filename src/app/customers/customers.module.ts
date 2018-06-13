import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CommonModule } from '@angular/common';
import { ModificationComponent } from './modification/modification.component';
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import {CardModule} from 'primeng/card';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TableModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        ConfirmDialogModule,
        CardModule
    ],
    exports: [],
    declarations: [CustomersComponent, ModificationComponent],
    providers: [ConfirmationService],
    entryComponents: [ModificationComponent]
})
export class CustomersModule { }
