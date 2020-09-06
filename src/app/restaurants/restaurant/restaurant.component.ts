import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
})
export class RestaurantComponent implements OnInit {

  restaurant: Restaurant[]

  constructor() { }

  ngOnInit(): void {
  }

}
