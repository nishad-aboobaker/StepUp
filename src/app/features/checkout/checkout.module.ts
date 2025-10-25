import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CheckoutRoutingModule } from './checkout-routing.module';



@NgModule({
  declarations: [
    CheckoutPageComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
