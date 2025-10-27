import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:"",component:ProductListsComponent},
  {path:"products-details",component:ProductDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class ProductsRoutingModule { }
