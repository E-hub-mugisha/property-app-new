import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-property-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-property-edit.component.html',
  styleUrls: ['./admin-property-edit.component.css']
})
export class AdminPropertyEditComponent implements OnInit {
  property: any | null = null;
  propertyForm: FormGroup;
  propertyId: string | null = null;  // To store property ID when editing

  private propertyApiUrl = 'http://localhost:3000/properties';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.propertyForm = this.fb.group({
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      title: ['', Validators.required],
      description: ['', Validators.required],
      images: this.fb.array([], Validators.required), // FormArray for multiple images
      location: ['', Validators.required],
      beds: [1, [Validators.required, Validators.min(0)]],
      bath: [1, [Validators.required, Validators.min(0)]],
      area: ['', [Validators.required, Validators.min(0)]],
      featured: [false]
    });
  }

  ngOnInit(): void {
    // Get the property ID from route params (if editing)
    this.propertyId = this.route.snapshot.paramMap.get('id');
    console.log('Property ID', this.propertyId);

    if (this.propertyId) {
      this.loadPropertyData(this.propertyId);
    }
  }

  loadPropertyData(id: string): void {
    this.http.get<any>(`${this.propertyApiUrl}/${id}`).subscribe(
      (data) => {
        this.property = data;
        console.log('Fetched Property:', data);

        // Patch the form with fetched data
        this.propertyForm.patchValue({
          type: this.property.type,
          price: this.property.price,
          title: this.property.title,
          description: this.property.description,
          location: this.property.location,
          beds: this.property.beds,
          bath: this.property.bath,
          area: this.property.area,
          featured: this.property.featured
        });

        // Load images into the FormArray
        if (this.property.images && this.property.images.length > 0) {
          const imageControls = this.property.images.map((image: string) => this.fb.control(image));
          const imagesFormArray = this.fb.array(imageControls);
          this.propertyForm.setControl('images', imagesFormArray);
        }

      },
      (error) => {
        console.error('Error fetching property:', error);
        this.property = null; // Handle error by setting property to null
      }
    );
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

  onSubmit(): void {
    if (this.propertyForm.valid) {
      this.http.put(`${this.propertyApiUrl}/${this.propertyId}`, this.propertyForm.value).subscribe(
        (response) => {
          console.log('Property Data:', this.propertyForm.value, response);
          alert('Property updated successfully!');
          this.router.navigate(['/admin/dashboard']);
        },
        (error) => {
          console.error('Error while updating property', error);
          alert('There was an error while updating');
        }
      );
    } else {
      alert('Please fill all required fields');
    }
  }
}
