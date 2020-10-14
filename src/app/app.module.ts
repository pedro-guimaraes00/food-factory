import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';
import { MenuComponent } from './restaurant-info/menu/menu.component';
import { MenuItemComponent } from './restaurant-info/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-info/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './restaurant-info/shopping-cart/shopping-cart.service';
import { RestaurantsService } from './restaurants/restaurants.service';
import { OrderService } from './order/order.service';
import { OrderComponent } from './order/order.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantInfoComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    OrderComponent,
    OrderItemsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  
  providers: [
    RestaurantsService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
