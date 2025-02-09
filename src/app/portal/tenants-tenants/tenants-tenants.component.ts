import { Component, OnInit } from '@angular/core';
import { TenantService } from '../../services/tenant.service';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tenants-tenants',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './tenants-tenants.component.html',
  styleUrl: './tenants-tenants.component.css'
})
export class TenantsTenantsComponent implements OnInit{
  tenants: any[] = [];
  newTenant = {
    name: '',
    email: '',
    phone: '',
    propertyId: '',
    leaseStart: '',
    leaseEnd: ''
  };

  private apiUrl = 'http://localhost:3000/tenants'; // JSON Server API URL

  constructor(private tenantService: TenantService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllTenants();
  }

  getAllTenants(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.tenants = data;
    });
  }
  /** ✅ Fetch Single Tenant by ID */
  getTenantById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  /** ✅ Add a New Tenant */
  addTenant(tenant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tenant);
  }

  addTenant(): void {
    this.tenantService.addTenant(this.newTenant).subscribe(() => {
      this.fetchTenants(); // Refresh list after adding
      this.resetForm(); // Reset form fields
    });
  }

  /** ✅ Update an Existing Tenant */
  updateTenant(id: number, tenant: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, tenant);
  }

  /** ✅ Delete a Tenant */
  deleteTenant(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  resetForm(): void {
    this.newTenant = {
      name: '',
      email: '',
      phone: '',
      propertyId: '',
      leaseStart: '',
      leaseEnd: ''
    };
  }
}
