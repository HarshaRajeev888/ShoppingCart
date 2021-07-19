import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import {ProductEntryComponent} from './product-entry/product-entry.component'
import {ProductlistComponent} from './productlist/productlist.component'

const routes: Routes = [{ path: 'product', component: ProductComponent },
{ path:'productentry',component:ProductEntryComponent},
{path:'home',component:ProductlistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
