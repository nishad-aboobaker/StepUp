import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private toastr: ToastrService) {}

  signup(userData: any): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.some((u: any) => u.email === userData.email);

    if (exists) {
      this.toastr.error('User already exists!');
      return false;
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    this.toastr.success('Signup successful!');
    this.router.navigate(['/auth/signin']);
    return true;
  }

  login(credentials: any): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: any) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      this.toastr.success('Login successful!');

      // Transfer guest cart to user cart
      this.transferGuestCartToUser(user);

      this.router.navigate(['/home']);
      return true;
    } else {
      this.toastr.error('Invalid credentials');
      return false;
    }
  }

  private transferGuestCartToUser(user: any): void {
    const guestCartKey = 'cart_items_guest';
    const userCartKey = `cart_items_${user.id || user.email}`;

    const guestCart = localStorage.getItem(guestCartKey);
    const userCart = localStorage.getItem(userCartKey);

    if (guestCart && (!userCart || JSON.parse(userCart).length === 0)) {
      // Move guest cart to user cart
      localStorage.setItem(userCartKey, guestCart);
      localStorage.removeItem(guestCartKey);
      
    } else if (guestCart && userCart) {
      // Merge carts if both exist
      const guestItems = JSON.parse(guestCart);
      const userItems = JSON.parse(userCart);

      // Simple merge: add guest items to user cart, preferring user quantities for duplicates
      const mergedCart = [...userItems];
      guestItems.forEach((guestItem: any) => {
        const existingIndex = mergedCart.findIndex(
          (item: any) => item.id === guestItem.id
        );
        if (existingIndex === -1) {
          mergedCart.push(guestItem);
        }
      });

      localStorage.setItem(userCartKey, JSON.stringify(mergedCart));
      localStorage.removeItem(guestCartKey);
    }
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.toastr.success('Logged out successfully!');
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedInUser');
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('loggedInUser')) {
      return true;
    }
    return false;
  }
}
