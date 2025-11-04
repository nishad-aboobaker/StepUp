import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderManagementComponent } from './order-management/order-management.component';

const routes: Routes = [
  { path: '', component: OrdersListComponent },
  { path: 'order-management', component: OrderManagementComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class OrdersRoutingModule {}
