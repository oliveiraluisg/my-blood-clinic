import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private router: Router) {}

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

