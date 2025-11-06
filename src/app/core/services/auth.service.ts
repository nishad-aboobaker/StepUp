import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tempUserData: any;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private emailService: EmailService
  ) {
    this.ensureAdminExists();
  }

  ensureAdminExists(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const adminExists = users.some((u: any) => u.role === 'admin');

    if (!adminExists) {
      const adminUser = {
        name: 'Admin',
        email: 'admin@stepup.com',
        password: '123123',
        role: 'admin',
      };
      users.push(adminUser);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  async signupAndSendOtp(userData: any): Promise<boolean> {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.some((u: any) => u.email === userData.email);

    if (exists) {
      this.toastr.error('User already exists!');
      return false;
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    this.tempUserData = { ...userData, otp };

    const emailSent = await this.emailService.sendOtpEmail(
      userData.email,
      userData.name,
      otp
    );

    if (emailSent) {
      this.toastr.success('OTP sent to your email!');
      return true;
    } else {
      this.toastr.error('Failed to send OTP. Please try again.');
      return false;
    }
  }

  verifyOtpAndRegister(otp: string): boolean {
    if (this.tempUserData && this.tempUserData.otp === otp) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const { otp: _, ...userDataToSave } = this.tempUserData;
      userDataToSave.role = 'user';
      users.push(userDataToSave);
      localStorage.setItem('users', JSON.stringify(users));
      this.toastr.success('Signup successful!');
      this.router.navigate(['/auth/signin']);
      this.tempUserData = null;
      return true;
    } else {
      this.toastr.error('Invalid OTP!');
      return false;
    }
  }

  login(credentials: any): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: any) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      if (user.blocked) {
        this.toastr.error(
          'Your account has been blocked. Please contact support.'
        );
        return false;
      }
      if (!user.role) {
        user.role = 'user';
      }
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      this.toastr.success('Login successful!');
      if (user.role === 'admin') {
        this.router.navigate(['/dashboard']);
      } else {
        this.transferGuestCartToUser(user);
        this.router.navigate(['']);
      }
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
      localStorage.setItem(userCartKey, guestCart);
      localStorage.removeItem(guestCartKey);
    } else if (guestCart && userCart) {
      const guestItems = JSON.parse(guestCart);
      const userItems = JSON.parse(userCart);
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

  getAllUsers(): any[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  toggleUserBlock(email: string): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email);
    if (user) {
      user.blocked = !user.blocked;
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
}
