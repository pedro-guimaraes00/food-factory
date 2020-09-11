import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';
import { MenuComponent } from './restaurant-info/menu/menu.component';
import { MenuItemComponent } from './restaurant-info/menu-item/menu-item.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
