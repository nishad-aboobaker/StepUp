import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  totalQty = 0;
  private cartSubscription: Subscription = new Subscription();

  constructor(public auth: AuthService, private cartService: CartService) {}

  ngOnInit() {
    this.cartSubscription = this.cartService.cart$.subscribe((cart) => {
      this.totalQty = this.cartService.getTotalQty();
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  logout() {
    this.auth.logout();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
