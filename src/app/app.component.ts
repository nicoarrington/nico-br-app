import { Component, Input, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  outputs :["isMapView"],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'Lunch Tyme';
  backBtnVisibility: string;

  constructor(private router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.backBtnVisibility = ['/', '/restaurants'].indexOf(e.url) > -1 ? 'hidden' : 'visible';
      }
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/');
  }
}
