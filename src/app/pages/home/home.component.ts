import { Component } from '@angular/core';
import { FeaturedPropertyComponent } from "../featured-property/featured-property.component";
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-home',
  imports: [FeaturedPropertyComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
