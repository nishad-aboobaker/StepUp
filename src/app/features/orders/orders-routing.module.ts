import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';

const routes: Routes = [
  {path:"orders",component:OrdersListComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class OrdersRoutingModule { }
