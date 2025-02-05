import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Lightbox, LightboxModule } from 'ngx-lightbox';  // ✅ Import Lightbox

@Component({
  selector: 'app-properties',
  standalone: true, // Make it a standalone component
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule, LightboxModule], // Import required modules
  providers: [Lightbox], // ✅ Provide Lightbox here
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent {
  properties: any[] = [];

  albums: any[] = [];

  propertyType: string = 'all';
  priceRange: string = 'all';
  location: string = 'all'; // Selected location
  beds: number = 0; // Selected number of beds
  
  private apiUrl = 'http://localhost:3000/properties';

  constructor(private http: HttpClient, private router: Router, private lightbox: Lightbox) {   }

  ngOnInit(): void {
    this.fetchProperties();
  }

  fetchProperties(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.properties = data;
        this.initializeAlbum();
      },
      (error) => {
        console.error('Error fetching properties:', error);
      }
    );
  }

  initializeAlbum(): void {
    this.albums = []; // Clear previous albums to avoid duplicates
    this.properties.forEach((property: { title: string; images: string[] }) => {
      property.images.forEach((image: string) => {
        this.albums.push({ src: image, caption: property.title, thumb: image });
      });
    });
  }

  openLightbox(index: number): void {
    this.lightbox.open(this.albums, index);
  }

  closeLightbox(): void {
    this.lightbox.close();
  }

  
  get filteredProperties() {
    return this.properties.filter((property) => {
      const matchesType = this.propertyType === 'all' || property.type === this.propertyType;
      const matchesPrice =
        this.priceRange === 'all' ||
        (this.priceRange === 'low' && property.price < 1000) ||
        (this.priceRange === 'medium' && property.price >= 1000 && property.price <= 3000) ||
        (this.priceRange === 'high' && property.price > 3000);

      const matchesLocation = this.location === 'all' || property.location === this.location;
      const matchesBeds = this.beds === 0 || property.beds === this.beds;

      return matchesType && matchesPrice && matchesLocation && matchesBeds;
    });
  }
  viewDetails(id: number): void {  // Assuming id is available
    this.router.navigate(['/property', id]);
  }

}
