import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DomainComponent } from './domain/domain.component';
import { ApplicationComponent } from './application/application.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'domain',
    component: DomainComponent,
  },
  {
    path: 'application',
    component: ApplicationComponent,
  },
];