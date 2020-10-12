import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { AddpositionComponent } from './addposition/addposition.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent,
    AddcustomerComponent,
    EditcustomerComponent,
    NavbarComponent,
    ProductsComponent,
    AddproductComponent,
    EditproductComponent,
    VieworderComponent,
    AddpositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
