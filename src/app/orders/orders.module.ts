import { NgModule } from '@angular/core';

import { OrdersComponent } from './orders.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ordersRoutesModule } from './orders.routes';

@NgModule({
  imports: [
    CommonModule,
    ordersRoutesModule,
    FormsModule,
    CardModule,
    AutoCompleteModule,
    ButtonModule,
    SelectButtonModule
  ],
  exports: [],
  declarations: [OrdersComponent],
  providers: [],
})
export class OrdersModule { }
