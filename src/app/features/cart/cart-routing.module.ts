import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {path:"",component:CartPageComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class CartRoutingModule { }
