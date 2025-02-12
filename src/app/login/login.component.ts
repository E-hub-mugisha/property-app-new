import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  submitted = false;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.submitted = true;  // To trigger validation errors
    if (this.email && this.password) {
      const credentials = { email: this.email, password: this.password };
      this.authService.login(credentials, this.password).subscribe({
        next: (response) => {
          // Handle successful login
          this.errorMessage = null;
        },
        error: (error) => {
          this.errorMessage = 'Login failed. Please try again.';
        }
      });
    }
  }
}
