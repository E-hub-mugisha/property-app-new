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

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'properties', component: PropertiesComponent },
    { path: 'tenants', component: TenantsComponent },
    { path: 'owners', component: OwnersComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'listing', component: ListdetailComponent},
    { path: 'property/:id', component: PropertyDetailComponent },
    { path: 'booking-confirmation/:id', component: BookingPropertyComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'blog-detail', component: BlogdetailComponent },
];
