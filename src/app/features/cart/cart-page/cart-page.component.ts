import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../../core/services/cart.service'; // ✅ IMPORT THIS

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  // ✅ ADD OnInit

  cartItems: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getCartTotal();
  }

  increase(id: number) {
    this.cartService.increaseQty(id);
    this.loadCart();
  }

  decrease(id: number) {
    this.cartService.decreaseQty(id);
    this.loadCart();
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
    this.loadCart();
  }
}
