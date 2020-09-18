import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service' 

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
  
  
export class ShoppingCartComponent implements OnInit {

  constructor( private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  showItems(): any[] {
   return this.shoppingCartService.items
  }

  clearItems() {
    this.shoppingCartService.clearItems
  }

  increasyQt() {
    this.shoppingCartService.increasyQt
  }

  decreasyQt() {
    this.shoppingCartService.decreaseQt
  }

  totalValue(): number {
    return this.shoppingCartService.total()
  }


}
