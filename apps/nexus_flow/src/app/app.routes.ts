import { Routes } from '@angular/router';
import { NexusDashboard } from '../../../../libs/features/dashboard/nexus-dashboard/nexus-dashboard';
import { authenticationGuardGuard } from './core/auth/auth-guard/authentication-guard-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: NexusDashboard,
    canActivate: [authenticationGuardGuard],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];
