import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../../services/frontend/property.service';
import { BookingService } from '../../services/frontend/booking.service';

@Component({
  selector: 'app-booking-property',
  imports: [CommonModule, FormsModule,HttpClientModule ],
  templateUrl: './booking-property.component.html',
  styleUrl: './booking-property.component.css'
})
export class BookingPropertyComponent implements OnInit {

  currentStep = 1; // Multi-step form tracker
  property: any | null = null; // Property details
  bookingData = {
    property_id: 0,
    checkIn: '',
    checkOut: '',
    guests: 1,
    total: 0,
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  }; // Booking form data

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propertyService: PropertyService,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchPropertyDetails(Number(id));
    }
  }

  fetchPropertyDetails(id: number): void {
    this.propertyService.getById(id).subscribe(
      (data) => {
        this.property = data;
        this.bookingData.property_id = data.id;
        this.bookingData.total = data.price; // Initialize total price
      },
      (error) => {
        console.error('Error fetching property details:', error);
        this.property = null;
      }
    );
  }

  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  confirmBooking(): void {
    this.bookingData.property_id = this.property?.id;
    this.bookingService.createBooking(this.bookingData).subscribe(
      (response) => {
        console.log('Booking confirmed:', response);
        alert('Booking successfully completed!');
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      (error) => {
        console.error('Error confirming booking:', error);
        alert('Error confirming booking. Please try again.');
      }
    );
  }
}