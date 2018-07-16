import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

export const routesModule = RouterModule.forRoot([
    {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full'
    },
    {
        path: 'customers',
        loadChildren: './customers/customers.module#CustomersModule'
    },
    {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule'
    },
    {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersModule'
    }
]);
