import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from "src/app/shared/shared.module";



@NgModule({
  declarations: [
    ProductListsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
]
})
export class ProductsModule { }
