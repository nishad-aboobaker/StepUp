import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { FeaturesModule } from './features/features.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FeaturesModule,
    PagesModule,
    SharedModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right', timeOut: 1500 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
