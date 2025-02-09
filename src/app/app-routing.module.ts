import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { TenantsComponent } from './pages/tenants/tenants.component';
import { OwnersComponent } from './pages/owners/owners.component';
import { ContactComponent } from './contact/contact.component';
import { PropertyDetailComponent } from './pages/property-detail/property-detail.component';
import { BookingPropertyComponent } from './pages/booking-property/booking-property.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogdetailComponent } from './pages/blogdetail/blogdetail.component';
import { TenantsTenantsComponent } from './portal/tenants-tenants/tenants-tenants.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'property/:id', component: PropertyDetailComponent },
  { path: 'tenants', component: TenantsComponent },
  { path: 'owners', component: OwnersComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'booking-confirmation/:id', component: BookingPropertyComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog-detail', component: BlogdetailComponent },
  { path: 'tenants-portal', component: TenantsComponent},
  { path: 'tenant-portal', component: TenantsTenantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
