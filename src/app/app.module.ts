import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HeaderComponent } from './shared/header/header.component';
import { ROUTES } from './app.routes';
import { CustomersModule } from './customers/customers.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { SharedComponent } from './shared/shared.component';
import { OrdersModule } from './orders/orders.module';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SharedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // for database features
    AngularFireAuthModule,
    // AngularFireStorageModule // for storage features

    CustomersModule,
    ProductsModule,
    OrdersModule,

    SidebarModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
