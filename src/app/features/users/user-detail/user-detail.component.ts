import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { OrdersService, Order } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: any;
  orders: Order[] = [];

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email');
    if (email) {
      this.user = this.authService.getAllUsers().find((u) => u.email === email);
      if (this.user) {
        this.orders = this.ordersService.getOrdersByUserId(this.user.email);
      }
    }
  }
}
