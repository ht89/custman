import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HeaderComponent } from './shared/header/header.component';
import { routesModule } from './app.routes';
import { CustomersModule } from './customers/customers.module';
import { LocationStrategy, PathLocationStrategy, registerLocaleData } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { SharedComponent } from './shared/shared.component';
import { OrdersModule } from './orders/orders.module';
import { SidebarModule } from 'primeng/sidebar';

import localeDe from '@angular/common/locales/de';
import { ServiceWorkerModule } from '@angular/service-worker';
registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SharedComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    routesModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // for database features
    AngularFireAuthModule,
    // AngularFireStorageModule // for storage features

    SidebarModule,

    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
