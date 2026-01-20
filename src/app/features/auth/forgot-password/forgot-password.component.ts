import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  email: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  resetPassword() {
    if (
      this.email &&
      this.newPassword &&
      this.newPassword === this.confirmPassword
    ) {
      const success = this.authService.resetPassword(
        this.email,
        this.newPassword
      );
      if (success) {
        // Optionally, navigate to the sign-in page
      }
    } else if (this.newPassword !== this.confirmPassword) {
      this.toastr.error('Passwords do not match!');
    } else {
      this.toastr.error('Please fill in all fields!');
    }
  }
}
