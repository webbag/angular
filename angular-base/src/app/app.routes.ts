import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DomainComponent } from './domain/domain.component';
import { ApplicationComponent } from './application/application.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    path: 'user-form',
    component: UserFormComponent,
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