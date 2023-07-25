import { ActionReducerMap } from '@ngrx/store';
import * as fromTodoList from './todo-list.reducer';

export const FEATURE_NAME = 'todosFeature';
export interface TodosState {}

export const reducers: ActionReducerMap<TodosState> = {
  todoList: fromTodoList.reducer,
};
