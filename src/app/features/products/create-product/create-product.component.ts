import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {
  ProductsService,
  Product,
} from 'src/app/core/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  productForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productsService: ProductsService,
    private toastr: ToastrService
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      thumbnail: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      this.productsService.addProduct(newProduct);
      this.toastr.success('Product created successfully!', 'Success');
      this.router.navigate(['/products/product-management']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/products/product-management']);
  }
}
