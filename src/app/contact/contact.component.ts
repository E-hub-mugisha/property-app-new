import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;
  loading = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  private apiUrl = 'http://localhost:3000/contacts'; // JSON Server endpoint

  constructor(private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.toastr.error('Please fill in all required fields.', 'Form Error');
      return;
    }

    this.loading = true;
    this.errorMessage = null;
    this.successMessage = null;

    // Prepare the form data
    const contactData = this.contactForm.value;

    // Send POST request to save contact
    this.http.post(this.apiUrl, contactData).subscribe(
      (response) => {
        this.loading = false;
        this.toastr.success('Your message has been sent and saved!', 'Success');
        this.contactForm.reset();
      },
      (error) => {
        this.loading = false;
        this.toastr.error('There was an error sending your message. Please try again.', 'Error');
        console.error('Error saving contact:', error);
      }
    );
  }
}