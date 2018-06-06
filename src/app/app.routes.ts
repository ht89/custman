import { Routes } from '@angular/router';
import { customersRoutes } from './customers/customers.routes';

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
];
