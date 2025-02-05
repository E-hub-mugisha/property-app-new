import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking-property',
  imports: [CommonModule, FormsModule,HttpClientModule ],
  templateUrl: './booking-property.component.html',
  styleUrl: './booking-property.component.css'
})
export class BookingPropertyComponent implements OnInit {

  currentStep = 1; // Tracks the current step of the form
  property: any | null = null; // Holds property details
  bookingData = {
    propertyId: 0,
    checkIn: '',
    checkOut: '',
    guests: 0,
    total: 0,
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  }; // Holds booking form data
  private propertiesApiUrl = 'http://localhost:3000/properties'; // API URL for properties
  private bookingsApiUrl = 'http://localhost:3000/bookings'; // API URL for bookings
  

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Get property ID from route parameters
    const propertyId = this.route.snapshot.paramMap.get('id');
    if (propertyId) {
      this.fetchPropertyDetails(Number(propertyId));
    }
  }

  // Fetch property details from the API
  fetchPropertyDetails(propertyId: number): void {
    this.http.get<any>(`${this.propertiesApiUrl}/${propertyId}`).subscribe(
      (data) => {
        this.property = data;
        this.bookingData.propertyId = data.id;
        this.bookingData.total = data.price; // Initialize total with property price
      },
      (error) => {
        console.error('Error fetching property details:', error);
        this.property = null;
      }
    );
  }

  // Navigate to the next step
  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  // Navigate to the previous step
  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Confirm booking (final step)
  confirmBooking(): void {
    this.http.post(this.bookingsApiUrl, this.bookingData).subscribe(
      (response) => {
        console.log('Booking saved:', response);
        alert('Booking confirmed and saved!');
        setTimeout(() => {
          this.router.navigate(['/']); // Redirect to the home page after 2 seconds
        }, 2000);
      },
      (error) => {
        console.error('Error saving booking:', error);
        alert('There was an error saving your booking. Please try again.');
      }
    );
  }
}