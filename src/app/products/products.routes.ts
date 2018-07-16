import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

export const productsRoutesModule = RouterModule.forChild([
  {
    path: '',
    component: ProductsComponent,
  }
]);
