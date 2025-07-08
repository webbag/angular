import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DomainComponent } from './domain/domain.component';
import { ApplicationComponent } from './application/application.component';

export const routes: Routes = [
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