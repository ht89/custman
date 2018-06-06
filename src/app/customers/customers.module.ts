import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AdditionComponent } from './addition/addition.component';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule
    ],
    exports: [],
    declarations: [CustomersComponent, AdditionComponent],
    providers: [],
    entryComponents: [AdditionComponent]
})
export class CustomersModule { }
