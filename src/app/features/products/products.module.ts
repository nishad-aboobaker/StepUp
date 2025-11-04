import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductManagementComponent } from './product-management/product-management.component';

@NgModule({
  declarations: [ProductListsComponent, ProductDetailsComponent, ProductManagementComponent],
  imports: [CommonModule, FormsModule, ProductsRoutingModule, SharedModule],
  exports: [ProductListsComponent, ProductDetailsComponent],
})
export class ProductsModule {}
