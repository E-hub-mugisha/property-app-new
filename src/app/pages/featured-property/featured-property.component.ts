import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../property.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-featured-property',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule], // Import required modules
  templateUrl: './featured-property.component.html',
  styleUrls: ['./featured-property.component.css'] // Fixed styleUrls
})
export class FeaturedPropertyComponent implements OnInit {
  
  featuredProperties: any[] = []; // Holds featured property data

  private apiUrl = 'http://localhost:3000/properties';
  
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchFeaturedProperties(); // Fetch featured properties
  }

  // Fetch featured properties
  fetchFeaturedProperties(): void {
    this.http.get<any[]>(`${this.apiUrl}?featured=true`).subscribe(
      (data) => {
        this.featuredProperties = data;
        console.log('Fetched Featured Properties:', data);
      },
      (error) => {
        console.error('Error fetching featured properties:', error);
      }
    );
  }

  // Navigate to property details
  viewDetails(id: number): void {
    this.router.navigate(['/property', id]);
  }
}
