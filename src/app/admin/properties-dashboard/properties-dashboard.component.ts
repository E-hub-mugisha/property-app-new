import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-properties-dashboard',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './properties-dashboard.component.html',
  styleUrls: ['./properties-dashboard.component.css']
})
export class PropertiesDashboardComponent implements OnInit {
  properties: any[] = [];
  private apiUrl = 'http://localhost:3000/properties';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getAllProperties();
  }

  getAllProperties(): void {
    this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching properties', error);
        alert('Error fetching properties');
        return throwError(error);
      })
    ).subscribe(
      (data) => this.properties = data
    );
  }

  getPropertyById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deleteProperty(id: string): void {
    const encodedId = encodeURIComponent(id); // Encode in case of special characters
  
    this.http.delete(`${this.apiUrl}/${encodedId}`).subscribe(
      (response) => {
        console.log('Property deleted successfully:', response);
        alert('Property deleted');
        window.location.reload(); // Refreshes the page
      },
      (error) => {
        console.error('Error deleting property:', error);
        alert('Error deleting property. Please try again.');
      }
    );
  }
  

  viewPropertyDetails(): void {
    // if (!id) {
    //   alert('Invalid property ID');
    //   return;
    // }
    this.router.navigate(['/property-detail']);
  }
  
}
