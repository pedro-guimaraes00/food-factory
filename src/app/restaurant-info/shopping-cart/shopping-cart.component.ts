import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'
import { MenuItem } from '../menu-item/menu-item.model'

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
    return this.shoppingCartService.totalValue()
  }


}
