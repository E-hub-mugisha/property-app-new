import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { error } from 'node:console';

@Component({
  selector: 'app-add-properties',
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './add-properties.component.html',
  styleUrl: './add-properties.component.css'
})
export class AddPropertiesComponent {
  propertyForm: FormGroup;

  private propertiesApiUrl = 'http://localhost:3000/properties';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.propertyForm = this.fb.group({
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      title: ['', Validators.required],
      description: ['', Validators.required],
      images: this.fb.array([], [Validators.required]),  // Using FormArray for multiple images
      location: ['', Validators.required],
      beds: [1, [Validators.required, Validators.min(0)]],
      bath: [1, [Validators.required, Validators.min(0)]],
      area: ['', [Validators.required, Validators.min(0)]],
      featured: [false]
    });
  }

  // Get images as FormArray
  get images(): FormArray {
    return this.propertyForm.get('images') as FormArray;
  }

  // Add new image URL field
  addImage() {
    this.images.push(this.fb.control(''));
  }

  // Remove image field
  removeImage(index: number) {
    this.images.removeAt(index);
  }


  // Submit form
  onSubmit(): void {
    this.http.post(this.propertiesApiUrl, this.propertyForm.value).subscribe(
      (response) => {
        if (this.propertyForm.valid) {
          console.log('Property Data:', this.propertyForm.value, response);
          alert('Property Added Successfully!');
        } else {
          alert('Please fill all required fields.');
        }
      },
      (error) => {
        console.error('Error saving Property:', error);
        alert('there was an error saving your property');
      }
    )

  }
}
