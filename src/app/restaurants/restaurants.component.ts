import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model'
import { RestaurantsService } from './restaurants.service'
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  animations: [
    trigger('searchToogle', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('*=>*', animate('250ms ease-in-out'))
    ])
  ]
})
  
  
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  searchState = 'hidden'

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
    this.restaurantsService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

  searchToogle() {
    this.searchState = this.searchState === 'hidden' ? 'visible' : 'hidden'
  }

}
