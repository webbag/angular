import { Routes } from '@angular/router';
import { DomainComponent } from './domain/domain.component';
import { ApplicationComponent } from './application/application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserList } from './user/user-list/user-list';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'user',
    component: UserList,
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