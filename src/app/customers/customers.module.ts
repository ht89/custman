import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AdditionComponent } from './addition/addition.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule
    ],
    exports: [],
    declarations: [CustomersComponent, AdditionComponent],
    providers: [],
    entryComponents: [AdditionComponent]
})
export class CustomersModule { }
