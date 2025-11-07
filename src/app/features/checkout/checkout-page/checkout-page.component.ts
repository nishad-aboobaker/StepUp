import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../../../core/services/cart.service';
import { OrdersService, Order } from '../../../core/services/orders.service';
import { AuthService } from '../../../core/services/auth.service';
import { PaymentService } from '../../../core/services/payment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent implements OnInit {
  cartItems: CartItem[] = [];
  total = 0;
  shippingForm = {
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  };
  showPaymentModal = false;
  isProcessing = false;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private authService: AuthService,
    private paymentService: PaymentService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Check if user is authenticated
    if (!this.authService.isAuthenticated()) {
      this.toastr.error('Please login to access checkout');
      this.router.navigate(['/auth/signin']);
      return;
    }

    this.loadCart();

    // Pre-fill shipping form with user data if available
    const user = this.authService.getCurrentUser();
    if (user) {
      this.shippingForm.name = user.name || '';
      this.shippingForm.email = user.email || '';
    }
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getCartTotal();
    if (this.cartItems.length === 0) {
      this.toastr.info('Your cart is empty');
      this.router.navigate(['/cart']);
    }
  }

  onSubmit() {
    if (!this.isShippingFormValid()) {
      this.toastr.error('Please fill in all required fields');
      return;
    }

    if (!this.authService.isAuthenticated()) {
      this.toastr.error('Please login to place an order');
      this.router.navigate(['/auth/signin']);
      return;
    }

    // Start processing
    this.isProcessing = true;

    // Initiate Razorpay payment
    this.initiatePayment();
  }

  async initiatePayment() {
    const orderId = 'order_' + Date.now(); // Generate a simple order ID for demo

    this.paymentService.initiatePayment(
      this.total,
      'INR',
      orderId,
      this.shippingForm.name,
      this.shippingForm.email,
      (response) => {
        // Payment successful
        this.handlePaymentSuccess(response);
      },
      (error) => {
        // Payment failed or dismissed
        this.handlePaymentFailure(error);
      }
    );
  }

  async handlePaymentSuccess(response: any) {
    try {
      const order: Order = await this.ordersService.placeOrder(
        this.cartItems,
        this.shippingForm
      );
      this.cartService.saveCart([]); // Clear the cart
      this.isProcessing = false;
      this.showPaymentModal = true;
      this.toastr.success(
        'Order placed successfully! Check your email for confirmation.'
      );
    } catch (error) {
      this.isProcessing = false;
      this.toastr.error('Failed to place order. Please try again.');
    }
  }

  handlePaymentFailure(error: any) {
    this.isProcessing = false;
    this.toastr.error('Payment failed or was cancelled. Please try again.');
  }

  onModalClose() {
    this.showPaymentModal = false;
    this.router.navigate(['/products']);
  }

  isShippingFormValid(): boolean {
    return !!(
      this.shippingForm.name &&
      this.shippingForm.email &&
      this.shippingForm.address &&
      this.shippingForm.city &&
      this.shippingForm.zip
    );
  }
}
