import { Injectable } from '@angular/core';
import { CartItem } from './cart.service';
import { AuthService } from './auth.service';
import { EmailService } from './email.service';

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
  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {}

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
  async placeOrder(
    items: CartItem[],
    shippingAddress: Order['shippingAddress']
  ): Promise<Order> {
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

    // Send order confirmation email
    try {
      const itemsSummary = order.items
        .map((item: CartItem) => `${item.name} (Qty: ${item.qty})`)
        .join(', ');

      const shippingAddressString = `${order.shippingAddress.name}\n${order.shippingAddress.address}\n${order.shippingAddress.city}, ${order.shippingAddress.zip}`;

      const emailSent = await this.emailService.sendOrderConfirmationEmail(
        order.shippingAddress.email,
        order.shippingAddress.name,
        order.id,
        new Date(order.orderDate).toLocaleDateString(),
        order.total,
        itemsSummary,
        shippingAddressString,
        order.status
      );

      if (!emailSent) {
        console.warn('Order placed successfully but confirmation email failed');
      }
    } catch (error) {
      console.error('Error sending order confirmation email:', error);
    }

    return order;
  }

  // Generate a unique order ID
 private generateOrderId(): string {
  const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `ORD-${Date.now().toString().slice(-5)}${randomPart}`;
}


  // Get orders for a specific user by userId
  getOrdersByUserId(userId: string): Order[] {
    const ordersKey = `orders_${userId}`;
    const data = localStorage.getItem(ordersKey);
    const orders = data ? JSON.parse(data) : [];
    // Sort orders by orderDate descending (latest first)
    return orders.sort(
      (a: Order, b: Order) =>
        new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
    );
  }

  // Get all orders from all users (for admin view)
  getAllOrders(): Order[] {
    const allOrders: Order[] = [];
    const keys = Object.keys(localStorage);

    keys.forEach((key) => {
      if (key.startsWith('orders_')) {
        const data = localStorage.getItem(key);
        if (data) {
          const orders = JSON.parse(data);
          allOrders.push(...orders);
        }
      }
    });

    // Sort all orders by orderDate descending (latest first)
    return allOrders.sort(
      (a: Order, b: Order) =>
        new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
    );
  }

  // Update order status
  async updateOrderStatus(
    orderId: string,
    newStatus: Order['status']
  ): Promise<{ updated: boolean; emailSent: boolean }> {
    const keys = Object.keys(localStorage);
    let updated = false;
    let orderToNotify: Order | null = null;

    keys.forEach((key) => {
      if (key.startsWith('orders_')) {
        const data = localStorage.getItem(key);
        if (data) {
          const orders: Order[] = JSON.parse(data);
          const orderIndex = orders.findIndex((order) => order.id === orderId);
          if (orderIndex !== -1) {
            orders[orderIndex].status = newStatus;
            localStorage.setItem(key, JSON.stringify(orders));
            orderToNotify = { ...orders[orderIndex] };
            updated = true;
          }
        }
      }
    });

    let emailSent = false;
    // Send email notification if order was updated
    if (updated && orderToNotify) {
      try {
        // Create items summary
        const itemsSummary = (orderToNotify as Order).items
          .map((item: CartItem) => `${item.name} (Qty: ${item.qty})`)
          .join(', ');

        emailSent = await this.emailService.sendOrderStatusUpdateEmail(
          (orderToNotify as Order).shippingAddress.email,
          (orderToNotify as Order).shippingAddress.name,
          (orderToNotify as Order).id,
          newStatus,
          new Date((orderToNotify as Order).orderDate).toLocaleDateString(),
          (orderToNotify as Order).total,
          itemsSummary
        );

        if (!emailSent) {
          console.warn('Order status updated but email notification failed');
        }
      } catch (error) {
        console.error('Error sending email notification:', error);
      }
    }

    return { updated, emailSent };
  }
}
