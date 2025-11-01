import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { CartService, CartItem } from '../../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css'],
})
export class ProductListsComponent implements OnInit {
  allProducts: any[] = [];
  filteredProducts: any[] = [];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.allProducts = this.productsService.products;

    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');

      if (category) {
        this.filteredProducts = this.allProducts.filter(
          (p: any) => p.category.toLowerCase() === category.toLowerCase()
        );
      } else {
        this.filteredProducts = this.allProducts;
      }
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product as CartItem);
    this.toastr.success('Added to cart!');
  }
}
