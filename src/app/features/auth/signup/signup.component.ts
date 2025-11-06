import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'user',
  };
  otp = '';
  otpSent = false;

  constructor(private auth: AuthService) {}

  async onSignup() {
    const otpSent = await this.auth.signupAndSendOtp(this.user);
    if (otpSent) {
      this.otpSent = true;
    }
  }

  onVerifyOtp() {
    this.auth.verifyOtpAndRegister(this.otp);
  }
}
