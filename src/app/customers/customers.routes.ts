import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';

export const customersRoutes: Routes = [
  {
    path: '',
    component: CustomersComponent,
  }
];
