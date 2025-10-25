import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomePageComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart-routing.module').then(
        (m) => m.CartRoutingModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
