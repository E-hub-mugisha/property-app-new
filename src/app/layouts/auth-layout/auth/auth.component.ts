import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [RouterModule],
  templateUrl: './auth.component.html',  // Fixed the template URL
  styleUrls: ['./auth.component.css']  // Keep styling for the auth layout
})
export class AuthComponent {
  // You can add any logic here that you need for the layout (e.g., handling redirecting)
}
