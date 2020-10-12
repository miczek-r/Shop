import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CustomersComponent } from './customers/customers.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { VieworderComponent } from './vieworder/vieworder.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent },
  { path: 'addCustomer', component: AddcustomerComponent },
  { path: 'editCustomer/:id', component: EditcustomerComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'addProduct', component: AddproductComponent },
  { path: 'editProduct/:id', component: EditproductComponent },
  { path: 'orders/:id', component: OrdersComponent },
  { path: 'orders/:id/:orderid', component: VieworderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
