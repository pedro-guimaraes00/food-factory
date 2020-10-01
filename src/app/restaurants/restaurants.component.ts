import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model'
import { RestaurantsService } from './restaurants.service'

import { trigger, state, style, transition, animate } from '@angular/animations'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { switchMap } from 'rxjs/operators'


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

    searchForm: FormGroup
    searchControl: FormControl
  

  constructor(private restaurantsService: RestaurantsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.searchControl = this.formBuilder.control('')
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
      .pipe(switchMap(searchTerm => this.restaurantsService.searchRestaurants(searchTerm)))
      .subscribe(restaurants => this.restaurants = restaurants);


    this.restaurantsService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }


  searchToogle() {
    this.searchState = this.searchState === 'hidden' ? 'visible' : 'hidden'
  }

}
