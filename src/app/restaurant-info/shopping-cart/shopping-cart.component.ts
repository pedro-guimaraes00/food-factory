import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'
import { MenuItem } from '../menu-item/menu-item.model'
import { ShoppingCartItem } from './shopping-cart.model';

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

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item)
  }
  
  addItem(item: any) {
    this.shoppingCartService.addItem(item)
  }

  clearItems() {
    this.shoppingCartService.clearItems()
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
