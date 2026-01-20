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

  constructor(private auth: AuthService) {}

  onSignup() {
    this.auth.signup(this.user);
  }
}
