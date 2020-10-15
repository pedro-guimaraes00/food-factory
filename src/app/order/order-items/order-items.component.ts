import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingCartItem } from '../../restaurant-info/shopping-cart/shopping-cart.model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  
  @Input() items: ShoppingCartItem[]

  @Output() increaseQt = new EventEmitter<ShoppingCartItem>();
  @Output() decreaseQt = new EventEmitter<ShoppingCartItem>();


  constructor() { }

  ngOnInit(): void {
  }

  emitIncreaseQt(item: ShoppingCartItem) {
    this.increaseQt.emit(item)
  }

  emitDecreaseQt(item: ShoppingCartItem) {
    this.decreaseQt.emit(item)
  }

}
