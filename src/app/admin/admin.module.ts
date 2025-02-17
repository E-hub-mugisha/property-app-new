import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TenantsDashboardComponent } from './tenants-dashboard/tenants-dashboard.component';
import { PropertiesDashboardComponent } from './properties-dashboard/properties-dashboard.component';
import { AddPropertiesComponent } from './add-properties/add-properties.component';
import { AdminPropertyDetailComponent } from './admin-property-detail/admin-property-detail.component';
import { AdminPropertyEditComponent } from './admin-property-edit/admin-property-edit.component';
import { RentCollectionComponent } from './rent-collection/rent-collection.component';
import { RentTrackingComponent } from './rent-tracking/rent-tracking.component';
import { MaintenanceDashboardComponent } from './maintenance-dashboard/maintenance-dashboard.component';
import { MaintenanceFormComponent } from './maintenance/maintenance-form/maintenance-form.component';
import { MaintenanceListComponent } from './maintenance/maintenance-list/maintenance-list.component';
import { FinancialsDashboardComponent } from './financials-dashboard/financials-dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminDashboardComponent,  // Import the standalone component
    TenantsDashboardComponent, // Import the standalone component
    PropertiesDashboardComponent,
    AddPropertiesComponent,
    AdminPropertyDetailComponent,
    AdminPropertyEditComponent,
    RentCollectionComponent,
    RentTrackingComponent,
    MaintenanceDashboardComponent,
    MaintenanceFormComponent,
    MaintenanceListComponent,
    FinancialsDashboardComponent
  ]
})
export class AdminModule { }
