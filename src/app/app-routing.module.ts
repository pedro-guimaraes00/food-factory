import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { MenuComponent } from './restaurant-info/menu/menu.component'



const routes: Routes = [

  { path: 'about', component: AboutComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  {
    path: 'restaurants/:id', component: RestaurantInfoComponent, children: [
      
      { path: 'menu', component: MenuComponent }
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
