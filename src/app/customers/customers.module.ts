import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule
    ],
    exports: [],
    declarations: [CustomersComponent],
    providers: [],
})
export class CustomersModule { }
