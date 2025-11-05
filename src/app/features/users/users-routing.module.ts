import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: UserManagementComponent },
  { path: 'user-detail/:email', component: UserDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class UsersRoutingModule {}
