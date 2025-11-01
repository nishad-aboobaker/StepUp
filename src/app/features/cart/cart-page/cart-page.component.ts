import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../../core/services/cart.service'; // ✅ IMPORT THIS
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  // ✅ ADD OnInit

  cartItems: CartItem[] = [];
  total = 0;
  showModal = false;
  itemToRemove: number | null = null;

  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

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
    this.itemToRemove = id;
    this.showModal = true;
  }

  confirmRemove() {
    if (this.itemToRemove !== null) {
      this.cartService.removeFromCart(this.itemToRemove);
      this.loadCart();
      this.toastr.success('Item removed from cart!');
    }
    this.showModal = false;
    this.itemToRemove = null;
  }

  cancelRemove() {
    this.showModal = false;
    this.itemToRemove = null;
  }
}
