import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  submitted = false;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.submitted = true;
    if (this.email && this.password) {
      const credentials = { email: this.email, password: this.password };

      this.authService.login(credentials).subscribe({
        next: () => {
          this.errorMessage = null;
          Swal.fire('Success', 'Welcome back!', 'success');
          this.router.navigate(['/admin/dashboard']);
        },
        error: () => {
          Swal.fire('Error', 'Invalid credentials. Try again.', 'error');
          this.errorMessage = 'Login failed. Please try again.';
        }
      });
    }
  }
}
