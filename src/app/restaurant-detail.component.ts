import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'my-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  @Input() restaurant: Restaurant;
  @Output() close = new EventEmitter();
  error: any;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      const name = params['name'];
      this.restaurantService.getRestaurant(name)
      .then(restaurant => this.restaurant = restaurant);
    });
  }
}
