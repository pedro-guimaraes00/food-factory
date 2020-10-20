import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '../restaurant-info/menu-item/menu-item.model';
import { ShoppingCartItem } from '../restaurant-info/shopping-cart/shopping-cart.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
  
export class OrderComponent implements OnInit {

  delivery: number = 20

  formOrder: FormGroup

  constructor(private orderService: OrderService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formOrder = this.formBuilder.group({
      endereco: this.formBuilder.control('', [Validators.required]),
      numero: this.formBuilder.control('', [Validators.required]),
      complemento: this.formBuilder.control('', [Validators.required]),
      nome: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required]),
      celular: this.formBuilder.control('', [Validators.required]),

    })
  }

  onSubmit() {
    console.log(this.formOrder.value);
  }

  shoppingCartItems(): any[] {
    return this.orderService.shoppingCartItems()
   }

  clearItems() {
    this.orderService.clearItems()
  }

  increaseQt(item: ShoppingCartItem) {
    this.orderService.increaseQt(item)
  }

  decreaseQt(item: ShoppingCartItem) {
    this.orderService.decreaseQt(item)
  }

  addItem(item: MenuItem) {
    this.orderService.addItem(item)
  }

  removeItem(item: ShoppingCartItem) {
    this.orderService.removeItem(item)
  }

  totalValue(): number {
    return this.orderService.totalValue()
  }


}
