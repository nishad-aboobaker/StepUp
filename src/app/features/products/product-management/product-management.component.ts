import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ProductsService,
  Product,
} from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
})
export class ProductManagementComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productsService.products;
  }

  editProduct(product: Product): void {
    this.router.navigate(['/products/update', product.id]);
  }

  deleteProduct(product: Product): void {
    if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
      this.productsService.deleteProduct(product.id);
      this.loadProducts(); // Refresh the list
    }
  }

  createProduct(): void {
    this.router.navigate(['/products/create']);
  }
}
