
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './component-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    HomePageComponent,
    NotFoundComponent
  ]
})
export class ComponentsModule { }
