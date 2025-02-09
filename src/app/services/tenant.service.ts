import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  private apiUrl = 'http://localhost:3000/tenants'; // JSON Server API URL

  constructor(private http: HttpClient) {}

  /** ✅ Fetch All Tenants */
  getAllTenants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
