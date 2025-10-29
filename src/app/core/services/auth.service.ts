import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  signup(userData: any): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.some((u: any) => u.email === userData.email);

    if (exists) {
      alert('User already exists!');
      return false;
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful!');
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
      alert('Login successful!');
      this.router.navigate(['/home']);
      return true;
    } else {
      alert('Invalid credentials');
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully!'); 
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedInUser');
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  }

  isAuthenticated(): boolean {
    if(localStorage.getItem('loggedInUser')){
      return true;
    }
    return false;
  }
}
