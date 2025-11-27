import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(): boolean {
    const currentUser = this.authService.getCurrentUser();

    if (
      this.authService.isAuthenticated() &&
      currentUser &&
      currentUser.role === 'admin'
    ) {
      return true;
    } else {
      this.toastr.error('Access denied. Admin privileges required.');
      this.router.navigate(['/auth/signin']);
      return false;
    }
  }
}
