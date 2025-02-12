import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rent-collection',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './rent-collection.component.html',
  styleUrl: './rent-collection.component.css'
})
export class RentCollectionComponent {
  rentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rentForm = this.fb.group({
      tenantName: ['', Validators.required],
      propertyId: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      dueDate: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      status: ['Pending'],
    });
  }

  // Submit Payment
  onSubmit() {
    if (this.rentForm.valid) {
      console.log('Payment Data:', this.rentForm.value);
      alert('Payment Recorded Successfully!');
    } else {
      alert('Please fill all required fields.');
    }
  }
}
