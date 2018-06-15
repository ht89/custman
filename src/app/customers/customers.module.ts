import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { CardModule } from 'primeng/card';
import { QuestionControlService } from '../shared/dynamic-form/control/question-control.service';
import { ModificationModule } from '../shared/modification/modification.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TableModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        ConfirmDialogModule,
        CardModule,
        ModificationModule
    ],
    exports: [],
    declarations: [CustomersComponent],
    providers: [ConfirmationService, QuestionControlService],
    entryComponents: []
})
export class CustomersModule { }
