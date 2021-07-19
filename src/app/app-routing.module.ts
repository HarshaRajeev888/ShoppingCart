import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewcartComponent} from './viewcart/viewcart.component'
import {LoginComponent} from './login/login.component'

const routes: Routes = [{ path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
{path:'viewcart',component:ViewcartComponent},
{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
