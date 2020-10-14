import { MenuItem } from "../menu-item/menu-item.model"
import { ShoppingCartItem } from "./shopping-cart.model"


export class ShoppingCartService {

  items: ShoppingCartItem[] = []


  clearItems() {
      this.items = []
  }

  increaseQt(item: ShoppingCartItem) {
      item.quantity = item.quantity + 1
  }

  decreaseQt(item: ShoppingCartItem) {
    item.quantity = item.quantity - 1
    if (item.quantity === 0) {
        this.removeItem(item)
      }
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((obj) => obj.menuItem.id === item.id)

    if(foundItem) {
      foundItem.quantity = foundItem.quantity + 1
    }
    
    else {
      this.items.push(new ShoppingCartItem(item))
    }
  }

  removeItem(item: ShoppingCartItem) {
    this.items.splice(this.items.indexOf(item),1)

  }

  totalValue(): number{
    return this.items
      .map(item => item.value())
        .reduce((prev, value) => prev + value, 0)
  }

}