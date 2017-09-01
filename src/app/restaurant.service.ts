import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Restaurant } from './restaurant';

@Injectable()
export class RestaurantService {
  private restaurantsUrl = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';

  constructor(private http: Http) { }

  getRestaurants(): Promise<Array<Restaurant>> {
    return this.http
      .get(this.restaurantsUrl)
      .toPromise()
      .then(response => response.json().restaurants as Restaurant[])
      .catch(this.handleError);
  }

  getRestaurant(name: string): Promise<Restaurant> {
    return this.getRestaurants()
      .then(restaurants => restaurants.find(restaurant => restaurant.name === name));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
