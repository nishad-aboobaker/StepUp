import { Component, OnInit } from '@angular/core';
import { OrdersService, Order } from '../../../core/services/orders.service';
import { InvoiceService } from '../../../core/services/invoice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css'],
})
export class OrderManagementComponent implements OnInit {
  orders: Order[] = [];
  filteredOrders: Order[] = [];
  selectedStatus: string = 'all';
  statusOptions: { value: string; label: string }[] = [
    { value: 'all', label: 'All Orders' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Shipped', label: 'Shipped' },
    { value: 'Delivered', label: 'Delivered' },
  ];

  constructor(
    private ordersService: OrdersService,
    private invoiceService: InvoiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadAllOrders();
  }

  loadAllOrders() {
    this.orders = this.ordersService.getAllOrders();
    this.applyFilter();
  }

  applyFilter() {
    if (this.selectedStatus === 'all') {
      this.filteredOrders = [...this.orders];
    } else {
      this.filteredOrders = this.orders.filter(
        (order) => order.status === this.selectedStatus
      );
    }
  }

  onStatusFilterChange(value: string) {
    this.selectedStatus = value;
    this.applyFilter();
  }

  async updateOrderStatus(orderId: string, newStatus: Order['status']) {
    try {
      const result = await this.ordersService.updateOrderStatus(
        orderId,
        newStatus
      );
      if (result.updated) {
        if (result.emailSent) {
          this.toastr.success(
            'Order status updated successfully! Email notification sent to customer.'
          );
        } else {
          this.toastr.warning(
            'Order status updated successfully, but email notification failed. Please check EmailJS configuration.'
          );
        }
        this.loadAllOrders(); // Refresh the list
      } else {
        this.toastr.error('Failed to update order status');
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      this.toastr.error('An error occurred while updating the order status');
    }
  }

  async downloadInvoice(order: Order) {
    try {
      await this.invoiceService.generateShippingLabel(order);
      this.toastr.success('Shipping label downloaded successfully!');
    } catch (error) {
      this.toastr.error('Failed to generate shipping label. Please try again.');
    }
  }
}
