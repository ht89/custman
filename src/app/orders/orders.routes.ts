import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';

export const ordersRoutesModule = RouterModule.forChild([
  {
    path: '',
    component: OrdersComponent,
  }
]);
