import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from "src/app/shared/shared.module";



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports:[
    AboutPageComponent,
    HomePageComponent
  ]
})
export class PagesModule { }
