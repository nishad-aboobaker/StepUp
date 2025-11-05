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
    // Open a modal or inline form to edit the product
    const newName = prompt('Enter new name:', product.name);
    if (newName && newName !== product.name) {
      const updatedProduct = { ...product, name: newName };
      this.productsService.updateProduct(updatedProduct);
      this.loadProducts(); // Refresh the list
    }
  }
}
