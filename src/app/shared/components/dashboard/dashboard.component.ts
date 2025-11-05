import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService, Order } from '../../../core/services/orders.service';
import { ProductsService } from '../../../core/services/products.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  totalRevenue: number = 0;
  totalSales: number = 0;
  monthlyRevenue: number = 0;
  monthlySales: number = 0;

  // Order status counts
  totalPending: number = 0;
  totalShipped: number = 0;
  totalDelivered: number = 0;
  monthlyPending: number = 0;
  monthlyShipped: number = 0;
  monthlyDelivered: number = 0;

  // Chart data
  revenueTrend: number[] = [60, 80, 70, 90, 85, 95]; // Sample percentages for bar chart
  pieChartData: { pending: number; shipped: number; delivered: number } = {
    pending: 0,
    shipped: 0,
    delivered: 0,
  };
  monthLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  pieChartGradient: string =
    'conic-gradient(#ff9500 0% 33%, #007aff 33% 66%, #34c759 66% 100%)';

  // Filters
  selectedMonth: number = new Date().getMonth();
  selectedYear: number = new Date().getFullYear();
  selectedCategory: string = 'all';

  // Available options
  months: { value: number; label: string }[] = [
    { value: 0, label: 'January' },
    { value: 1, label: 'February' },
    { value: 2, label: 'March' },
    { value: 3, label: 'April' },
    { value: 4, label: 'May' },
    { value: 5, label: 'June' },
    { value: 6, label: 'July' },
    { value: 7, label: 'August' },
    { value: 8, label: 'September' },
    { value: 9, label: 'October' },
    { value: 10, label: 'November' },
    { value: 11, label: 'December' },
  ];

  years: number[] = [];
  categories: string[] = ['all'];

  private updateSubscription: Subscription | null = null;

  constructor(
    private ordersService: OrdersService,
    private productsService: ProductsService
  ) {
    // Generate years from current year back to 2020
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2020; year--) {
      this.years.push(year);
    }
  }

  ngOnInit(): void {
    this.updateCategories();
    this.updateStats();
    // Update stats every 30 seconds
    this.updateSubscription = interval(30000).subscribe(() => {
      this.updateStats();
    });
  }

  ngOnDestroy(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }

  onFilterChange(): void {
    this.updateStats();
  }

  private updateCategories(): void {
    const allProducts = this.productsService.products;
    const categorySet = new Set<string>();

    allProducts.forEach((product) => {
      if (product.category) {
        categorySet.add(product.category);
      }
    });

    this.categories = ['all', ...Array.from(categorySet).sort()];
  }

  private updateStats(): void {
    const allOrders = this.ordersService.getAllOrders();

    // Filter orders based on selected month and year
    let filteredOrders = allOrders.filter((order: Order) => {
      const orderDate = new Date(order.orderDate);
      return (
        orderDate.getMonth() === this.selectedMonth &&
        orderDate.getFullYear() === this.selectedYear
      );
    });

    // Filter by category if not 'all'
    if (this.selectedCategory !== 'all') {
      filteredOrders = filteredOrders.filter((order: Order) =>
        order.items.some((item) => item.category === this.selectedCategory)
      );
    }

    this.monthlyRevenue = filteredOrders.reduce(
      (sum: number, order: Order) => sum + order.total,
      0
    );
    this.monthlySales = filteredOrders.length;

    // Monthly order status counts
    this.monthlyPending = filteredOrders.filter(
      (order) => order.status === 'pending'
    ).length;
    this.monthlyShipped = filteredOrders.filter(
      (order) => order.status === 'shipped'
    ).length;
    this.monthlyDelivered = filteredOrders.filter(
      (order) => order.status === 'delivered'
    ).length;

    // Total stats (all time)
    this.totalRevenue = allOrders.reduce(
      (sum: number, order: Order) => sum + order.total,
      0
    );
    this.totalSales = allOrders.length;

    // Total order status counts
    this.totalPending = allOrders.filter(
      (order) => order.status === 'pending'
    ).length;
    this.totalShipped = allOrders.filter(
      (order) => order.status === 'shipped'
    ).length;
    this.totalDelivered = allOrders.filter(
      (order) => order.status === 'delivered'
    ).length;

    // Update chart data
    this.updateChartData();
  }

  private updateChartData(): void {
    // Update pie chart data with current totals
    this.pieChartData = {
      pending: this.totalPending,
      shipped: this.totalShipped,
      delivered: this.totalDelivered,
    };

    // Calculate pie chart gradient based on actual data
    const total = this.totalPending + this.totalShipped + this.totalDelivered;
    if (total > 0) {
      const pendingPercent = (this.totalPending / total) * 100;
      const shippedPercent = (this.totalShipped / total) * 100;
      const deliveredPercent = (this.totalDelivered / total) * 100;
      this.pieChartGradient = `conic-gradient(#ff9500 0% ${pendingPercent}%, #007aff ${pendingPercent}% ${
        pendingPercent + shippedPercent
      }%, #34c759 ${pendingPercent + shippedPercent}% 100%)`;
    }

    // Generate dynamic revenue trend based on all 12 months of the current year
    const currentDate = new Date();
    const revenueData: number[] = [];
    const monthLabels: string[] = [];
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    for (let i = 11; i >= 0; i--) {
      const targetMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i,
        1
      );
      const monthOrders = this.ordersService
        .getAllOrders()
        .filter((order: Order) => {
          const orderDate = new Date(order.orderDate);
          return (
            orderDate.getMonth() === targetMonth.getMonth() &&
            orderDate.getFullYear() === targetMonth.getFullYear()
          );
        });

      const monthRevenue = monthOrders.reduce(
        (sum: number, order: Order) => sum + order.total,
        0
      );
      // Convert to percentage (assuming max revenue is 10k for scaling)
      const percentage = Math.min((monthRevenue / 10000) * 100, 100);
      revenueData.push(Math.max(percentage, 10)); // Minimum 10% to show some activity

      // Update month labels
      monthLabels.push(monthNames[targetMonth.getMonth()]);
    }

    this.revenueTrend = revenueData;
    this.monthLabels = monthLabels;
  }
}
