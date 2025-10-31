import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {

  allProducts: any[] = [];
  filteredProducts: any[] = [];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.allProducts = this.productsService.products;

    this.route.paramMap.subscribe(params => {
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
}
