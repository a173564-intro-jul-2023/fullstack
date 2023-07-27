import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromTodoList from './todo-list.reducer';
import * as fromUiHints from './ui-hints.reducer';
import { TodoListItemModel } from '../models';

export const FEATURE_NAME = 'todosFeature';
export interface TodosState {
  todoList: fromTodoList.TodoListState;
  uiHints: fromUiHints.UiHintsState;
}

export const reducers: ActionReducerMap<TodosState> = {
  todoList: fromTodoList.reducer,
  uiHints: fromUiHints.reducer,
};

// 1. Feature Selector
const selectFeature = createFeatureSelector<TodosState>(FEATURE_NAME);

// 2. Selector per branch of the feature
const selectTodoListBranch = createSelector(selectFeature, (f) => f.todoList);
const selectUiHints = createSelector(selectFeature, (f) => f.uiHints);

// 3. Helpers
const { selectAll: selectTodoListItemArray } =
  fromTodoList.adapter.getSelectors(selectTodoListBranch);

// 4. What the component needs.

// One for UiHints
export const selectTodoListLoaded = createSelector(
  selectUiHints,
  (h) => h.todoListLoaded
);

// One that returns a TodoListItemModel[]
export const selectTodoListModel = createSelector(
  selectTodoListItemArray,

  (items) => items as TodoListItemModel[]
);
