import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService, Order } from '../../../core/services/orders.service';
import { AuthService } from '../../../core/services/auth.service';
import { InvoiceService } from '../../../core/services/invoice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];

  constructor(
    private ordersService: OrdersService,
    private authService: AuthService,
    private invoiceService: InvoiceService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Check if user is authenticated
    if (!this.authService.isAuthenticated()) {
      this.toastr.error('Please login to view your orders');
      this.router.navigate(['/auth/signin']);
      return;
    }

    this.loadOrders();
  }

  loadOrders() {
    this.orders = this.ordersService.getOrders();
  }

  async downloadInvoice(order: Order) {
    try {
      await this.invoiceService.generateInvoice(order);
      this.toastr.success('Invoice downloaded successfully!');
    } catch (error) {
      this.toastr.error('Failed to generate invoice. Please try again.');
    }
  }
}
