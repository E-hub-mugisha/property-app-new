import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TenantsDashboardComponent } from './tenants-dashboard/tenants-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PropertiesDashboardComponent } from './properties-dashboard/properties-dashboard.component';
import { AddPropertiesComponent } from './add-properties/add-properties.component';
import { AdminPropertyDetailComponent } from './admin-property-detail/admin-property-detail.component';
import { AdminPropertyEditComponent } from './admin-property-edit/admin-property-edit.component';
import { RentCollectionComponent } from './rent-collection/rent-collection.component';
import { RentTrackingComponent } from './rent-tracking/rent-tracking.component';
import { MaintenanceFormComponent } from './maintenance/maintenance-form/maintenance-form.component';
import { MaintenanceListComponent } from './maintenance/maintenance-list/maintenance-list.component';
import { EngineerListComponent } from './engineers/engineer-list/engineer-list.component';
import { FinancialsDashboardComponent } from './financials-dashboard/financials-dashboard.component';

const adminRoutes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'tenants', component: TenantsDashboardComponent },
  { path: 'properties', component: PropertiesDashboardComponent },
  { path: 'add-property', component: AddPropertiesComponent },
  { path: 'property-detail/:id', component: AdminPropertyDetailComponent },
  { path: 'property-edit/:id', component: AdminPropertyEditComponent },
  { path: 'rental-collections', component: RentCollectionComponent },
  { path: 'rental-tracking', component: RentTrackingComponent },
  { path: 'maintenance', component: MaintenanceListComponent },
  { path: 'maintenance/add', component: MaintenanceFormComponent },
  { path: 'maintenance/edit/:id', component: MaintenanceFormComponent },
  { path: 'engineers', component: EngineerListComponent },
  { path: 'financials', component: FinancialsDashboardComponent },
  // Add other admin-specific routes here
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
