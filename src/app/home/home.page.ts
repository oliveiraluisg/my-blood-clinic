import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  latitude!: number;
  longitude!: number;

  constructor(private router: Router) {}

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
      console.log('Latitude:', this.latitude);
      console.log('Longitude:', this.longitude);
    } catch (error) {
      console.error('Erro ao obter a localização:', error);
    }
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }
  goCalendar() {
    this.router.navigateByUrl('/calendar');
  }
  goPatient() {
    this.router.navigateByUrl('/patient');
  }
  goDonor() {
    this.router.navigateByUrl('/donor');
  }
  goHistory() {
    this.router.navigateByUrl('/history');
  }
}