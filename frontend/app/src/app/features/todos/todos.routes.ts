import { Routes } from '@angular/router';
import { TodosComponent } from './todos.component';
import { FEATURE_NAME, reducers } from './state';
import { provideState } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { TodoListEffects } from './state/todo-list.effects';

export const todosRoutes: Routes = [
  {
    path: '',
    component: TodosComponent,
    providers: [
      provideEffects([TodoListEffects]),
      provideState(FEATURE_NAME, reducers),
      provideHttpClient(),
    ],
  },
];
