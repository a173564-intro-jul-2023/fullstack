import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
import { AboutComponent } from './pages/about.component';
import { counterRoutes } from './features/counter/counter.routes';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./features/todos/todos.routes').then(
        (routes) => routes.todosRoutes
      ),
  },
];

const redirectRoutes: Routes = [
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

export const routes: Routes = [
  ...counterRoutes,
  ...appRoutes,
  ...redirectRoutes,
];
