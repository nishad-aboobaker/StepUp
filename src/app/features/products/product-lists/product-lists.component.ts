import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.products;
  }
}
