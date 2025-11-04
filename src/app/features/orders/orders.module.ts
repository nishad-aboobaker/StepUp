import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OrderManagementComponent } from './order-management/order-management.component';

@NgModule({
  declarations: [OrdersListComponent, OrderManagementComponent],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
})
export class OrdersModule {}
