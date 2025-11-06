import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AdminAuthGuard } from '../../core/services/guards/admin-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'user-detail/:email',
    component: UserDetailComponent,
    canActivate: [AdminAuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class UsersRoutingModule {}
