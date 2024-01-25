import { Component } from '@angular/core';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';
  @Component({
  selector: 'app-geo-page',
  templateUrl: 'geo.page.html',
  styleUrls: ['geo.page.scss'],
})
export class GeolocationPage {
  loc: GeolocationPosition;
  constructor() {}
  async getCurrentPosition() {
    this.loc = await Geolocation.getCurrentPosition();
  }
}
