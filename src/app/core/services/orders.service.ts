import { Injectable } from '@angular/core';
import { CartItem } from './cart.service';
import { AuthService } from './auth.service';

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  shippingAddress: {
    name: string;
    email: string;
    address: string;
    city: string;
    zip: string;
  };
  orderDate: Date;
  status: 'pending' | 'shipped' | 'delivered';
}

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private authService: AuthService) {}

  // Get the orders key based on authentication status
  private getOrdersKey(): string {
    const user = this.authService.getCurrentUser();
    if (user) {
      return `orders_${user.id || user.email}`;
    } else {
      return 'orders_guest';
    }
  }

  // Get orders from localStorage
  getOrders(): Order[] {
    const data = localStorage.getItem(this.getOrdersKey());
    const orders = data ? JSON.parse(data) : [];
    // Sort orders by orderDate descending (latest first)
    return orders.sort(
      (a: Order, b: Order) =>
        new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
    );
  }

  // Save orders to localStorage
  saveOrders(orders: Order[]) {
    localStorage.setItem(this.getOrdersKey(), JSON.stringify(orders));
  }

  // Place a new order
  placeOrder(
    items: CartItem[],
    shippingAddress: Order['shippingAddress']
  ): Order {
    const user = this.authService.getCurrentUser();
    if (!user) {
      throw new Error('User must be authenticated to place an order');
    }

    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const order: Order = {
      id: this.generateOrderId(),
      userId: user.id || user.email,
      items: [...items],
      total,
      shippingAddress,
      orderDate: new Date(),
      status: 'pending',
    };

    const orders = this.getOrders();
    orders.push(order);
    this.saveOrders(orders);

    return order;
  }

  // Generate a unique order ID
  private generateOrderId(): string {
    return 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  }
}
