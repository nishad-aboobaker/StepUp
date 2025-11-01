import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaymentConfirmedModalComponent } from './components/payment-confirmed-modal/payment-confirmed-modal.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PaymentConfirmedModalComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    PaymentConfirmedModalComponent,
  ],
})
export class SharedModule {}
