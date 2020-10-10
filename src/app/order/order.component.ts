import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../restaurant-info/shopping-cart/shopping-cart.service';
import { ShoppingCartItem } from '../restaurant-info/shopping-cart/shopping-cart.model'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
