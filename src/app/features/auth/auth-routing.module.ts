import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"signin",component:SigninComponent},
  // {path:"**",component:NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
