import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        UserManagementComponent,
        UserDetailComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule
    ]
})
export class UsersModule { }
