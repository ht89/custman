import { Routes } from '@angular/router';
import { customersRoutes } from './customers/customers.routes';
import { productsRoutes } from './products/products.routes';
import { ordersRoutes } from './orders/orders.routes';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    children: [...customersRoutes]
  },
  {
    path: 'products',
    children: [...productsRoutes]
  },
  {
    path: 'orders',
    children: [...ordersRoutes]
  }
];
