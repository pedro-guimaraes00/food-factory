import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../restaurant-info/shopping-cart/shopping-cart.service';
import { ShoppingCartItem } from '../restaurant-info/shopping-cart/shopping-cart.model'
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  formOrder: FormGroup

  constructor(private shoppingCart: ShoppingCartService, private formBuilder: FormBuilder) { }

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

}
