import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Star Wars | THE SWAPI PROJECT',
    loadComponent: () =>
      import('../home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'detail/:id',
    title: 'Star Wars | Detail',
    loadComponent: () =>
      import('../detail/detail.component').then((c) => c.DetailComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
