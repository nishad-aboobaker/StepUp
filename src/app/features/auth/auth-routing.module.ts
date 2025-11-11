import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoggedInGuard } from '../../core/services/guards/logged-in.guard';

const routes: Routes = [
  { path: 'signup', component: SignupComponent, canActivate: [LoggedInGuard] },
  { path: 'signin', component: SigninComponent, canActivate: [LoggedInGuard] },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [LoggedInGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
