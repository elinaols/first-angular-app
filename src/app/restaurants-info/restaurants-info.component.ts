import { Component, Input } from '@angular/core';
// Imports RestaurantService to handle the response from the external JSON-file
import { RestaurantsService } from '../restaurants.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurants-info',
  // Imports CommonModule to activate template directives 
  imports: [CommonModule],
  templateUrl: './restaurants-info.component.html',
  styleUrl: './restaurants-info.component.css'
})

export class RestaurantsInfoComponent {
  restaurantsInfo: any = [];

  // Creating an empty array to recieve data from parent component
  @Input() restaurant!: [];
  // Observable handles asynchronous data streams and multiple values over time
  restaurants$!: Observable<[]>;

  constructor(private restaurantService: RestaurantsService) {}

  // Using ngOnInit to fetch data when component is initialized
  ngOnInit(): void {
    // The subscribe method subscribes to the HTTP-request and updates the components data if any changes occur
    this.restaurantService.getRestaurantsInfo().subscribe((data) => {
      console.log(data)
      this.restaurantsInfo = data;
    });
  }
}
