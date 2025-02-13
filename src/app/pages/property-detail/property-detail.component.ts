import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PropertyService } from '../../services/frontend/property.service';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Import required modules
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {


  property: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private propertyService: PropertyService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get ID from URL
    this.fetchPropertyDetail(id);
  }

  fetchPropertyDetail(id: number): void {
    this.propertyService.getById(id).subscribe(
      (data) => {
        this.property = { 
          ...data, 
          images: typeof data.images === 'string' ? JSON.parse(data.images) : data.images
        };
      },
      (error) => {
        console.error('Error fetching property:', error);
      }
    );
  }


  bookProperty(id: number): void {  // Assuming id is available and user is authenticated to book property    

    // Redirect to booking confirmation page  
    this.router.navigate(['/booking-confirmation', id]);
  }
}
