import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      const user = this.authService.getCurrentUser();
      if (user && user.role === 'admin') {
        this.toastr.info('You are already logged in as admin');
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.info('You are already logged in');
        this.router.navigate(['/products']);
      }
      return false;
    } else {
      return true;
    }
  }
}
