import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [
    OrdersListComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
