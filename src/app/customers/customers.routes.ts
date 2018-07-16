import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';

export const customersRoutesModule = RouterModule.forChild([
  {
    path: '',
    component: CustomersComponent,
  }
]);
