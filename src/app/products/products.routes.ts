import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

export const productsRoutes: Routes = [
    {
        path: '',
        component: ProductsComponent,
    }
];
