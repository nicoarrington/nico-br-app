import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsComponent } from './restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail.component';
import { InternetsComponent } from './internets.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'internets', component: InternetsComponent },
  { path: 'restaurant/:name', component: RestaurantDetailComponent },
  { path: 'restaurants', component: RestaurantsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }