import { Injectable } from "@angular/core"
import { MenuItem } from '../restaurant-info/menu-item/menu-item.model';
import { ShoppingCartItem } from '../restaurant-info/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from "../restaurant-info/shopping-cart/shopping-cart.service"



@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService) { }
  
  clearItems() {
    this.shoppingCartService.clearItems();
  }

  increasyQt(item: ShoppingCartItem) {
    this.shoppingCartService.increasyQt(item);
  }

  decreaseQt(item: ShoppingCartItem) {
    this.shoppingCartService.decreaseQt(item);
  }
  addItem(item: MenuItem) {
    this.shoppingCartService.addItem(item);
  }

  removeItem(item: ShoppingCartItem) {
    this.shoppingCartService.removeItem(item);
  }

  totalValue(): number {
    return this.shoppingCartService.totalValue();
  }

}