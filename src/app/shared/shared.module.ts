 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaymentConfirmedModalComponent } from './components/payment-confirmed-modal/payment-confirmed-modal.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PaymentConfirmedModalComponent,
    SidenavComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, RouterModule, BaseChartDirective],
  exports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    PaymentConfirmedModalComponent,
    SidenavComponent,
    DashboardComponent,
    BaseChartDirective,
  ],
})
export class SharedModule {}
