import { NgModule } from '@angular/core';

import { OrdersComponent } from './orders.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [],
  declarations: [OrdersComponent],
  providers: [],
})
export class OrdersModule { }
