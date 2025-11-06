import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, ForgotPasswordComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, FormsModule],
  exports: [SigninComponent, SignupComponent, AuthRoutingModule, ForgotPasswordComponent],
})
export class AuthModule {}
