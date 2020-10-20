import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateX(-20px)'}),
        animate('500ms 0s ease-in')
      ])
    ]),

    trigger('showCart', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-30px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]  

})
  
  
export class ShoppingCartComponent implements OnInit {

  rowState = 'ready'
  cartState = 'ready'

  delivery: number = 20

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

  increaseQt() {
    this.shoppingCartService.increaseQt
  }

  decreaseQt() {
    this.shoppingCartService.decreaseQt
  }

  totalValue(): number {
    return this.shoppingCartService.totalValue()
  }


}
