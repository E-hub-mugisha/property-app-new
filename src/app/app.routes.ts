import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OwnersComponent } from './pages/owners/owners.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { ServicesComponent } from './pages/services/services.component';
import { TenantsComponent } from './pages/tenants/tenants.component';
import { ContactComponent } from './contact/contact.component';
import { ListdetailComponent } from './pages/listdetail/listdetail.component';
import { PropertyDetailComponent } from './pages/property-detail/property-detail.component';
import { BookingPropertyComponent } from './pages/booking-property/booking-property.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogdetailComponent } from './pages/blogdetail/blogdetail.component';
import { TenantsTenantsComponent } from './portal/tenants-tenants/tenants-tenants.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { TenantsDashboardComponent } from './admin/tenants-dashboard/tenants-dashboard.component';
import { PropertiesDashboardComponent } from './admin/properties-dashboard/properties-dashboard.component';
import { AddPropertiesComponent } from './admin/add-properties/add-properties.component';
import { AdminPropertyDetailComponent } from './admin/admin-property-detail/admin-property-detail.component';
import { AdminPropertyEditComponent } from './admin/admin-property-edit/admin-property-edit.component';
import { RentCollectionComponent } from './admin/rent-collection/rent-collection.component';
import { RentTrackingComponent } from './admin/rent-tracking/rent-tracking.component';
import { MaintenanceFormComponent } from './admin/maintenance/maintenance-form/maintenance-form.component';
import { MaintenanceListComponent } from './admin/maintenance/maintenance-list/maintenance-list.component';
import { EngineerListComponent } from './admin/engineers/engineer-list/engineer-list.component';
import { FinancialsDashboardComponent } from './admin/financials-dashboard/financials-dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './layouts/auth-layout/auth/auth.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent, // Wraps all public pages
        children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'properties', component: PropertiesComponent },
            { path: 'property/:id', component: PropertyDetailComponent },
            { path: 'tenants', component: TenantsComponent },
            { path: 'owners', component: OwnersComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'booking-confirmation/:id', component: BookingPropertyComponent },
            { path: 'blogs', component: BlogsComponent },
            { path: 'blog/:id', component: BlogdetailComponent },
            { path: 'tenants-portal', component: TenantsComponent },
            { path: 'tenant-portal', component: TenantsTenantsComponent },
        ],
    },

    {
        path: 'auth',   // Auth routes use their own layout
        component: AuthComponent,  // Wraps login and register pages
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ],
    },

    // Admin routes protected with AuthGuard and RoleGuard
    {
        path: 'admin',
        component: AdminLayoutComponent, // Wraps all admin pages
        canActivate: [AuthGuard, RoleGuard],
        children: [
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
        ],
    },

    // Wildcard route for 404 page
    { path: '**', component: NotFoundComponent },
];
