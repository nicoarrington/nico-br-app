import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantService } from './restaurant.service';
import { RestaurantsComponent } from './restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail.component';
import { InternetsComponent } from './internets.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXScQs94bV1UdkJBDg_sUJb7nEoXXghA8'
    })
  ],
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantDetailComponent,
    InternetsComponent,
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
