import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  private isAuthenticated = false;

  private userSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
    this.loadUser();
  }

  private loadUser() {
    const token = localStorage.getItem('token');
    if (token) {
      this.http.get(`${this.apiUrl}/user`).subscribe((user) => {
        this.userSubject.next(user);
      });
    }
  }

  getUser(): Observable<any> {
    return this.userSubject.asObservable();
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        this.userSubject.next(response.user);
        this.isAuthenticated = true;
      })
    );
  }

  logout(): void {
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe(() => {
      localStorage.removeItem('token');
      this.userSubject.next(null);
      this.isAuthenticated = false;
    });
  }

  checkAuthentication(): boolean {
    return this.isAuthenticated;
  }

  getRole(): string {
    return this.userSubject.value?.role || '';
  }
}
