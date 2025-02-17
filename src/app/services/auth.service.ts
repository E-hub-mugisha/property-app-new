import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';  // Import Swal

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getRole() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://127.0.0.1:8000/api';
  private userSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
    this.loadUser();
  }

  private loadUser() {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.http.get(`${this.apiUrl}/user`, { headers }).subscribe({
        next: (user) => this.userSubject.next(user),
        error: () => this.logout(),
      });
    }
  }

  getUser(): Observable<any> {
    return this.userSubject.asObservable();
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        this.userSubject.next(response.user);
        Swal.fire('Success', 'Login successful!', 'success');  // Show success alert
      }),
      catchError((error) => {
        Swal.fire('Error', 'Login failed. Please try again.', 'error');  // Show error alert
        return throwError(() => error);
      })
    );
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      tap(() => {
        Swal.fire('Success', 'Account created successfully!', 'success');  // Show success alert
      }),
      catchError((error) => {
        Swal.fire('Error', 'Registration failed. Try again.', 'error');  // Show error alert
        return throwError(() => error);
      })
    );
  }

  logout(): void {
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.userSubject.next(null);
        Swal.fire('Success', 'Logged out successfully!', 'success');  // Show success alert
      },
      error: () => {
        Swal.fire('Error', 'Logout failed.', 'error');  // Show error alert
      }
    });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
