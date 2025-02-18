import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PropertyService } from '../../services/backend/property.service';

@Component({
  selector: 'app-properties-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  templateUrl: './properties-dashboard.component.html',
  styleUrls: ['./properties-dashboard.component.css']
})
export class PropertiesDashboardComponent implements OnInit {
  properties: any[] = [];

  albums: any[] = [];

  constructor(private http: HttpClient, private router: Router, private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.getAllProperties();
  }

  getAllProperties(): void {
    this.propertyService.getAll().subscribe(
      (data) => {
        console.log('Fetched properties:', data); // Debugging step
        if (!Array.isArray(data)) {
          console.error('Expected an array but got:', data);
          return;
        }
  
        this.properties = data.map((property: any) => ({
          ...property,
          images: typeof property.images === 'string' ? JSON.parse(property.images) : property.images || []
        }));
        console.log('Processed properties:', this.properties); // Debugging
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


  deleteProperty(id: number): void {
    this.propertyService.delete(id).pipe(
      catchError(error => {
        console.error('Error deleting property', error);
        alert('Error deleting property');
        return throwError(error);
      })
    ).subscribe(() => this.getAllProperties());
  }

}
