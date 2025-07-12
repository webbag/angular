import { Routes } from '@angular/router';
import { DomainComponent } from './domain/domain.component';
import { ApplicationComponent } from './application/application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserList } from './user/user-list/user-list';
import { UserEdit } from './user/user-edit/user-edit';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UserList,
  },
  {
    path: 'users/:id',
    component: UserEdit,
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