import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('500ms 0s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
        style({ opacity: 0.8, transform: 'translateX(15px)', offset: 0.8 }),
        style({ opacity:1, transform: 'translateX(0px)', offset: 1  })
      ]))),
      transition('ready => void', animate('500ms 0s ease-out', keyframes([
        style({ opacity: 1, transform: 'translateX(-30px)', offset: 1 }),
        style({ opacity: 0.2, transform: 'translateX(15px)', offset: 0.2 }),
        style({ opacity:0, transform: 'translateX(0px)', offset: 0  })
      ])))
    ])
  ]  
})
  
  
export class ShoppingCartComponent implements OnInit {

  rowState = 'ready'

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
