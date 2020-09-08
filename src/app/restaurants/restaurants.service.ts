import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FOOD_API } from '../app.api'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { catchError } from 'rxjs/operators'

import { Restaurant } from './restaurant/restaurant.model'


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  restaurant: Restaurant

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(`${FOOD_API}/restaurants`)
      .pipe(map(response => response as Restaurant[]))
  }

  getRestaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${FOOD_API}/restaurants/${id}`)
      .pipe(map(response => response as Restaurant))
  }

}
