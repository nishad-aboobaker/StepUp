import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../../../core/services/cart.service';
import { OrdersService, Order } from '../../../core/services/orders.service';
import { AuthService } from '../../../core/services/auth.service';
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
  paymentForm = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  };
  showPaymentModal = false;
  isProcessing = false;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private authService: AuthService,
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
    if (!this.isFormValid()) {
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

    // Simulate payment processing
    this.processPayment();
  }

  processPayment() {
    // Simulate payment processing delay
    setTimeout(() => {
      try {
        const order: Order = this.ordersService.placeOrder(
          this.cartItems,
          this.shippingForm
        );
        this.cartService.saveCart([]); // Clear the cart
        this.isProcessing = false;
        this.showPaymentModal = true;
      } catch (error) {
        this.isProcessing = false;
        this.toastr.error('Failed to place order. Please try again.');
      }
    }, 2000); // 2 second delay to simulate processing
  }

  onModalClose() {
    this.showPaymentModal = false;
    this.router.navigate(['/products']);
  }

  isFormValid(): boolean {
    return !!(
      this.shippingForm.name &&
      this.shippingForm.email &&
      this.shippingForm.address &&
      this.shippingForm.city &&
      this.shippingForm.zip &&
      this.paymentForm.cardNumber &&
      this.paymentForm.expiryDate &&
      this.paymentForm.cvv
    );
  }

  isPaymentFormValid(): boolean {
    return !!(
      this.paymentForm.cardNumber &&
      this.paymentForm.expiryDate &&
      this.paymentForm.cvv
    );
  }

  getCardType(): string {
    const cardNumber = this.paymentForm.cardNumber.replace(/\s/g, '');
    if (/^4/.test(cardNumber)) {
      return 'visa';
    } else if (/^5[1-5]/.test(cardNumber) || /^2[2-7]/.test(cardNumber)) {
      return 'mastercard';
    } else if (/^3[47]/.test(cardNumber)) {
      return 'amex';
    }
    return '';
  }
}
