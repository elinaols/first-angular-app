import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Injectable provides the service to the application
@Injectable({
  providedIn: 'root'
})

export class RestaurantsService {  

  // Adds the HttpClient service to the class so I can handle the HTTP-requests in the component
  constructor(private http: HttpClient) { }
  
  //Observable handles asynchronous data streams and fetches data from an external JSON-file
  getRestaurantsInfo(): Observable<[]> {
    return this.http.get<[]>(`https://webbkurs.ei.hv.se/~elol0031/JSR200/Checkpoint_2/restaurants.json`);
  }
}
