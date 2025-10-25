import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

const routes: Routes = [
  {path:"checkout",component:CheckoutPageComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class CheckoutRoutingModule { }
