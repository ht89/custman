import { NgModule } from '@angular/core';

import { OrdersComponent } from './orders.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    AutoCompleteModule
  ],
  exports: [],
  declarations: [OrdersComponent],
  providers: [],
})
export class OrdersModule { }
