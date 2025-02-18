import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../../services/backend/property.service';

@Component({
  selector: 'app-admin-property-detail',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './admin-property-detail.component.html',
  styleUrl: './admin-property-detail.component.css'
})
export class AdminPropertyDetailComponent implements OnInit {

  property: any | null = null; // Holds property data
  
  googleMapsUrl: SafeResourceUrl | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private sanitizer: DomSanitizer, private propertyService: PropertyService) { }

  ngOnInit(): void {
    // Get the property ID from the route
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Property ID:', id);

    if (id) {
      this.fetchPropertyById(Number(id)); // Fetch property data
    }
  }

  // Fetch property details by ID
  fetchPropertyById(id: number): void {
    this.propertyService.getById(id).subscribe(
      (data) => {
        this.property = {
          ...data,
          images: typeof data.images === 'string' ? JSON.parse(data.images) : data.images
        };
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
