import { MenuItem } from "../menu-item/menu-item.model"

export class ShoppingCartItem {
  
  constructor(public menuItem: MenuItem, public quantity: number = 1) { }

  value(): number {
    return this.menuItem.price * this.quantity
  }

}