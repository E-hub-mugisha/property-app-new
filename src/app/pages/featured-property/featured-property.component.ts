import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PropertyService } from '../../services/frontend/property.service';

@Component({
  selector: 'app-featured-property',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule], // Import required modules
  templateUrl: './featured-property.component.html',
  styleUrls: ['./featured-property.component.css'] // Fixed styleUrls
})
export class FeaturedPropertyComponent implements OnInit {

  featuredProperties: any[] = []; // Holds featured property data

  albums: any[] = [];

  constructor(private http: HttpClient, private router: Router, private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.fetchFeaturedProperties(); // Fetch featured properties
  }

  // Fetch featured properties
  fetchFeaturedProperties(): void {
    this.propertyService.getFeatured().subscribe(
      (data) => {
        this.featuredProperties = data.map((property: any) => ({
          ...property,
          images: typeof property.images === 'string' ? JSON.parse(property.images) : property.images
        }));
        this.initializeAlbum();
      },
      (error) => {
        console.error('Error fetching properties:', error);
      }
    );
  }

  initializeAlbum(): void {
    this.albums = []; // Clear previous albums to avoid duplicates
    this.featuredProperties.forEach((property: { title: string; images: string[] }) => {
      property.images.forEach((image: string) => {
        this.albums.push({ src: image, caption: property.title, thumb: image });
      });
    });
  }

  // Navigate to property details
  viewDetails(id: number): void {
    this.router.navigate(['/property', id]);
  }
}
