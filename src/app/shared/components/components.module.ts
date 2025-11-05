import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './component-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [HomePageComponent, NotFoundComponent],
  imports: [CommonModule, ComponentsRoutingModule, SharedModule],
  exports: [HomePageComponent, NotFoundComponent],
})
export class ComponentsModule {}
