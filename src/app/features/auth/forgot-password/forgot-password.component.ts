import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  otp: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  step: number = 1;

  constructor(private authService: AuthService, private toastr: ToastrService) { }

  async sendOtp() {
    if (this.email) {
      const success = await this.authService.sendPasswordResetOtp(this.email);
      if (success) {
        this.step = 2;
      }
    }
  }

  verifyOtp() {
    if (this.otp) {
      const success = this.authService.verifyPasswordResetOtp(this.otp);
      if (success) {
        this.step = 3;
      }
    }
  }

  resetPassword() {
    if (this.newPassword && this.newPassword === this.confirmPassword) {
      const success = this.authService.resetPassword(this.newPassword);
      if (success) {
        // Optionally, navigate to the sign-in page
      }
    } else {
      this.toastr.error('Passwords do not match!');
    }
  }
}
