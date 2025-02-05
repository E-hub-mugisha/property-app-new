import { Component } from '@angular/core';
import { FeaturedPropertyComponent } from "../featured-property/featured-property.component";

@Component({
  selector: 'app-home',
  imports: [FeaturedPropertyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
