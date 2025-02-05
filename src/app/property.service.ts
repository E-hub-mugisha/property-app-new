import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private apiUrl = 'http://localhost:3000/properties'; // URL of JSON Server

  constructor(private http: HttpClient) {}

  // Fetch all properties
  getProperties(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getFeaturedProperties(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?featured=true`);
  }
}
