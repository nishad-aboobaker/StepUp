
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shared/components/components.module').then((m) => m.ComponentsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/features.module').then((m) => m.FeaturesModule),
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
