import { Routes } from '@angular/router';
import { customersRoutes } from './customers/customers.routes';
import { productsRoutes } from './products/products.routes';

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
    }
];
