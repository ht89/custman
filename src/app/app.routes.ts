import { Routes } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full'
    },
    {
        path: 'customers',
        loadChildren: () => CustomersModule
    },
    {
        path: 'products',
        loadChildren: () => ProductsModule
    },
    {
        path: 'orders',
        loadChildren: () => OrdersModule
    }
];
