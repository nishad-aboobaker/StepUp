import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserManagementComponent } from './users/user-management/user-management.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

@NgModule({
  declarations: [
    UserManagementComponent,
    UserDetailComponent
  ],
  imports: [CommonModule, FormsModule, FeaturesRoutingModule, SharedModule],
  exports: [FormsModule],
})
export class FeaturesModule {}
