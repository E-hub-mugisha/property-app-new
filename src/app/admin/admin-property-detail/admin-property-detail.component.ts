import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-property-detail',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './admin-property-detail.component.html',
  styleUrl: './admin-property-detail.component.css'
})
export class AdminPropertyDetailComponent implements OnInit {

  property: any | null = null; // Holds property data
  private apiUrl = 'http://localhost:3000/properties'; // Base API URL
  googleMapsUrl: SafeResourceUrl | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Get the property ID from the route
    const propertyId = this.route.snapshot.paramMap.get('id');
    console.log('Property ID:', propertyId);

    if (propertyId) {
      this.fetchPropertyById(propertyId); // Fetch property data
    }
  }

  // Fetch property details by ID
  fetchPropertyById(id: string): void {
    this.http.get<any>(`${this.apiUrl}/${id}`).subscribe(
      (data) => {
        this.property = data;
        console.log('Fetched Property:', data);
        this.sanitizeGoogleMapsUrl(data.location);
      },
      (error) => {
        console.error('Error fetching property:', error);
        this.property = null; // Handle error by setting property to null
      }
    );
  }

  // Method to sanitize the Google Maps URL
  sanitizeGoogleMapsUrl(location: string): void {
    const url = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(location)}`;
    this.googleMapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url); // Sanitize URL
  }
}
