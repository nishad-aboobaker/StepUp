import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ProductsService,
  Product,
} from '../../../core/services/products.service';
import { CartService, CartItem } from '../../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any = null;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.product =
        this.productsService.products.find(
          (p: any) => p.id === parseInt(productId, 10)
        ) || null;
      if (!this.product) {
        console.error('Product not found');
      }
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product as CartItem);
      this.toastr.success('Added to cart!');
    }
  }
}
