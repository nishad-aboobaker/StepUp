import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CheckoutPageComponent],
  imports: [CommonModule, FormsModule, CheckoutRoutingModule, SharedModule],
})
export class CheckoutModule {}
