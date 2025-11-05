import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.authService
      .getAllUsers()
      .filter((user) => user.role !== 'admin');
  }

  toggleBlock(user: any): void {
    this.authService.toggleUserBlock(user.email);
    this.loadUsers();
  }

  viewUser(user: any): void {
    this.router.navigate(['/users/user-detail', user.email]);
  }
}
