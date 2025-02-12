import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maintenance-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './maintenance-form.component.html',
  styleUrl: './maintenance-form.component.css'
})
export class MaintenanceFormComponent {
  request = {
    tenantName: '',
    propertyId: '',
    issue: '',
    description: '',
    status: 'Pending',
    assignedTo: '', // Engineer to be assigned
    scheduledDate: null
  };

  engineers = [
    { id: 1, name: 'John Doe', expertise: 'Plumbing' },
    { id: 2, name: 'Alice Uwase', expertise: 'Electrical' },
    { id: 3, name: 'Eric Mugisha', expertise: 'HVAC' }
  ];

  // Method to assign the engineer to the maintenance request
  assignEngineer(engineer: any) {
    this.request.assignedTo = engineer.name;
  }

  onSubmit() {
    // Code to submit the maintenance request form
    console.log('Maintenance Request Submitted:', this.request);
  }
}
