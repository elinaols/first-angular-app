import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantsInfoComponent } from '../app/restaurants-info/restaurants-info.component'

@Component({
  selector: 'app-root',
  // Imports modules and components to make them available in the application
  imports: [RouterOutlet, RestaurantsInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {}
