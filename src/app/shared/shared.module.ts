import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaymentConfirmedModalComponent } from './components/payment-confirmed-modal/payment-confirmed-modal.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PaymentConfirmedModalComponent,
    HomePageComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    PaymentConfirmedModalComponent,
    HomePageComponent,
  ],
})
export class SharedModule {}
