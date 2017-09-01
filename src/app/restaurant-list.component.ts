import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  error: any;
  
  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) { }

  getRestaurants(): void {
    this.restaurantService
      .getRestaurants()
      .then(restaurants => this.restaurants = restaurants)
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getRestaurants();
  }

  gotoDetail(restaurant: Restaurant): void {
    const link = ['/restaurant', restaurant.name];
    this.router.navigate(link);
  }
}
