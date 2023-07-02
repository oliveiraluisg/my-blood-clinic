import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'donor',
    loadComponent: () => import('./donor/donor.page').then( m => m.DonorPage)
  },
  {
    path: 'patient',
    loadComponent: () => import('./patient/patient.page').then( m => m.PatientPage)
  },
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar.page').then( m => m.CalendarPage)
  },
  {
    path: 'history',
    loadComponent: () => import('./history/history.page').then( m => m.HistoryPage)
  },
];
