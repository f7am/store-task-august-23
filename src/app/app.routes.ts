import { Route } from '@angular/router';

export const appRoutes: Route[] = [

  {
    path: '',
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', loadComponent: () => import('./modules/auth/login/login.component').then(m => m.LoginComponent) },
    ]
  }

];
