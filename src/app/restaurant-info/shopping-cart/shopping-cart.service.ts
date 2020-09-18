import { MenuItem } from "../menu-item/menu-item.model"
import { ShoppingCartItem } from "./shopping-cart.model"


export class ShoppingCartService {

  items: ShoppingCartItem[] = []


  clearItems() {
      this.items = []
  }

  increasyQt(item: ShoppingCartItem) {
      item.quantity = item.quantity + 1
  }

  decreaseQt(item: ShoppingCartItem) {
    item.quantity = item.quantity - 1
    if (item.quantity === 0) {
        this.removeItem(item)
      }
  }

  removeItem(item: ShoppingCartItem) {
    this.items.splice(this.items.indexOf(item),1)

  }

  total(): number{
    return
  }

}