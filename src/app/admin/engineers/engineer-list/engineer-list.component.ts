import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-engineer-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.css']  // Fixed typo: styleUrl -> styleUrls
})
export class EngineerListComponent {

  engineersForm: FormGroup;
  engineers: any[] = [];
  newEngineer = {
    name: '',
    expertise: '',
    status: ''
  };
  engineerApiUrl = 'http://localhost:3000/engineers';  // Assuming backend API is running here
  engineerId: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute) {
    this.engineersForm = this.fb.group({
      name: ['', Validators.required],
      expertise: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchEngineers();  // Fetch engineers when the component loads

    this.engineerId = this.route.snapshot.paramMap.get('id');
    console.log('engineer ID', this.engineerId);

    if (this.engineerId) {
      this.loadEngineerData(this.engineerId);
    }
  }

  loadEngineerData(id: string): void {
    this.http.get<any>(`${this.engineerApiUrl}/${id}`).subscribe(
      (data) => {
        this.engineers = data;
        console.log('Fetched engineers:', data);

        // Patch the form with fetched data
        const engineer = this.engineers[0];
        this.engineersForm.patchValue({
          name: engineer.name,
          expertise: engineer.expertise,
          status: engineer.status,
        });

      },
      (error) => {
        console.error('Error fetching engineers:', error);
        this.engineers = []; // Handle error by setting engineers to an empty array
      }
    );
  }

  // Fetch engineers list from the backend
  fetchEngineers(): void {
    this.http.get<any[]>(this.engineerApiUrl).subscribe(
      (data) => {
        this.engineers = data;
      },
      (error) => {
        console.error('Error fetching engineers:', error);
        alert('Error fetching engineer list.');
      }
    );
  }

  // Handle engineer selection (for example, when assigning them to a task)
  selectEngineer(engineer: any) {
    console.log('Selected Engineer:', engineer);
  }

  // Submit form data
  onSubmit(): void {
    if (this.engineersForm.invalid) {
      alert('Please fill all required fields.');
      return;
    }

    this.http.post(this.engineerApiUrl, this.engineersForm.value).subscribe(
      (response) => {
        console.log('Engineer Added:', this.engineersForm.value, response);
        alert('Engineer Added Successfully!');
        this.fetchEngineers();  // Fetch updated engineer list
        this.resetForm();
      },
      (error) => {
        console.error('Error saving Engineer:', error);
        alert('There was an error saving your Engineer.');
      }
    );
  }
  resetForm(): void {
    this.newEngineer = {
      name: '',
      expertise: '',
      status: ''
    };
  }
  
}
