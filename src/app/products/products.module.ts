import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
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
    declarations: [ProductsComponent],
    providers: [],
})
export class ProductsModule { }
