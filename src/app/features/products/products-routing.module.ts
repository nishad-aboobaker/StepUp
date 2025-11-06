import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { AdminAuthGuard } from '../../core/services/guards/admin-auth.guard';

const routes: Routes = [
  { path: '', component: ProductListsComponent },
  {
    path: 'product-management',
    component: ProductManagementComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'create',
    component: CreateProductComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'update/:id',
    component: UpdateProductComponent,
    canActivate: [AdminAuthGuard],
  },
  { path: ':category', component: ProductListsComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
