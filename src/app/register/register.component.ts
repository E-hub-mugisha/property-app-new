import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports:[CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        role: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  // Getter to easily access form fields in the template
  get f() {
    return this.registerForm.controls;
  }

  // Custom password match validator
  passwordMatchValidator(group: FormGroup) {
    const { password, confirmPassword } = group.controls;
    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }

  // Check if passwords match
  isPasswordMatching(): boolean {
    return this.f['password'].value === this.f['confirmPassword'].value;
  }

  // Submit form and register the user
  onSubmit() {
    this.submitted = true;

    // Stop if the form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.registerForm.value).subscribe(
      (response) => {
        // Successfully registered, redirect or show success message
        this.router.navigate(['/login']);
      },
      (error) => {
        // Handle error (e.g., email already taken)
        this.errorMessage = error.error.message || 'Registration failed';
      }
    );
  }
}
