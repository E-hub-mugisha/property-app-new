import { Component, OnInit } from '@angular/core';
import { TenantService } from '../../services/tenant.service';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tenants-dashboard',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './tenants-dashboard.component.html',
  styleUrl: './tenants-dashboard.component.css'
})
export class TenantsDashboardComponent implements OnInit {
  tenants: any[] = [];
  newTenant = {
    name: '',
    email: '',
    phone: '',
    propertyId: '',
    leaseStart: '',
    leaseEnd: ''
  };
  
  editedTenant = {
    id: '',
    name: '',
    email: '',
    phone: '',
    propertyId: '',
    leaseStart: '',
    leaseEnd: ''
  }

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
  addTenant(): void {
    this.http.post(this.apiUrl, this.newTenant).subscribe(
      (response) => {
        console.log('Tenant added successfully:', response);
        alert('Tenant added successfully');
        this.resetForm();
        this.getAllTenants();
      },
      (error) => {
        console.error('Error adding tenant:', error);
        alert('Error adding tenant');
      }
    );
  }

  /** ✅ Update an Existing Tenant */
  updateTenant(): void {
    this.http.put(`${this.apiUrl}/${this.editedTenant.id}`, this.editedTenant).subscribe(
      (response) => {
        alert('Tenant updated successfully');
        this.getAllTenants();
      },
      (error) => {
        alert('Error updating tenant');
      }
    );
  }

  /** ✅ Delete a Tenant */
  deleteTenant(id: number): void{
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      (response) => {
        console.log('Tenant deleted successfully:', response);
        alert('Tenant deleted successfully');
        this.getAllTenants();
      },
      (error) => {
        console.error('Error deleting tenant:', error);
        alert('Error deleting tenant');
      }
    )
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
