import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-maintenance-list',
  imports: [CommonModule, RouterModule,],
  templateUrl: './maintenance-list.component.html',
  styleUrl: './maintenance-list.component.css'
})
export class MaintenanceListComponent {
  maintenanceRequests = [
    { id: 1, tenantName: 'Eric Mugisha', propertyId: 'P001', issue: 'Leaking Pipe', description: 'Water leaking in the kitchen.', status: 'Pending', submittedAt: new Date() },
    { id: 2, tenantName: 'Alice Uwase', propertyId: 'P002', issue: 'Broken Heater', description: 'Heater not working.', status: 'In Progress', submittedAt: new Date(), assignedTo: 'John Doe', scheduledDate: new Date('2025-02-15') }
  ];

  constructor() { }

  ngOnInit(): void {}

  updateStatus(request: any, newStatus: string) {
    request.status = newStatus;
  }

  viewRequest(id: number) {
    // Navigate to maintenance request details (if needed).
  }

}
