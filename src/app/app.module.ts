import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HeaderComponent } from './header/header.component';
import { ROUTES } from './app.routes';
import { CustomersModule } from './customers/customers.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { SharedComponent } from './shared/shared.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SharedComponent
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
        ProductsModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
