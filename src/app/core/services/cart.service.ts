import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

export interface CartItem {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
  price: number;
  stock: number;
  thumbnail: string;
  qty: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this.cartSubject.asObservable();

  constructor(private authService: AuthService) {
    this.updateCartSubject();
  }

  private updateCartSubject() {
    this.cartSubject.next(this.getCart());
  }

  // Get the cart key based on authentication status
  private getCartKey(): string {
    const user = this.authService.getCurrentUser();
    if (user) {
      return `cart_items_${user.id || user.email}`;
    } else {
      return 'cart_items_guest';
    }
  }

  // ✅ Get cart from localStorage
  getCart(): CartItem[] {
    const data = localStorage.getItem(this.getCartKey());
    return data ? JSON.parse(data) : [];
  }

  // ✅ Save cart to localStorage
  saveCart(cart: CartItem[]) {
    localStorage.setItem(this.getCartKey(), JSON.stringify(cart));
    this.updateCartSubject();
  }

  // ✅ Add a product to cart
  addToCart(product: CartItem) {
    let cart = this.getCart();

    const existing = cart.find((item: CartItem) => item.id === product.id);

    if (existing) {
      existing.qty += 1; // increase qty if product exists
    } else {
      cart.push({ ...product, qty: 1 });
    }

    this.saveCart(cart);
  }

  // ✅ Remove item from cart
  removeFromCart(productId: number) {
    let cart = this.getCart();
    cart = cart.filter((item: CartItem) => item.id !== productId);
    this.saveCart(cart);
  }

  // ✅ Increase quantity
  increaseQty(productId: number) {
    let cart = this.getCart();
    const item = cart.find((p: CartItem) => p.id === productId);
    if (item) item.qty++;
    this.saveCart(cart);
  }

  // ✅ Decrease quantity
  decreaseQty(productId: number) {
    let cart = this.getCart();
    const item = cart.find((p: CartItem) => p.id === productId);
    if (item) {
      item.qty--;
      if (item.qty <= 0) {
        this.removeFromCart(productId);
        return;
      }
    }
    this.saveCart(cart);
  }

  // ✅ Calculate total price
  getCartTotal() {
    let cart = this.getCart();
    return cart.reduce(
      (sum: number, item: CartItem) => sum + item.price * item.qty,
      0
    );
  }

  // ✅ Calculate total quantity
  getTotalQty() {
    let cart = this.getCart();
    return cart.reduce((sum: number, item: CartItem) => sum + item.qty, 0);
  }
}
