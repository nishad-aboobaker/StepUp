import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { AdminAuthGuard } from '../../core/services/guards/admin-auth.guard';

const routes: Routes = [
  { path: '', component: OrdersListComponent, canActivate: [AdminAuthGuard] },
  { path: 'order-management', component: OrderManagementComponent, canActivate: [AdminAuthGuard] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class OrdersRoutingModule {}
