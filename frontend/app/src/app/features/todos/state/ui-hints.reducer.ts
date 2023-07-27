import { createReducer, on } from '@ngrx/store';
import { TodoDocuments, TodosEvents } from './todos.actions';
import { FeatureEvents } from './feature.actions';

export interface UiHintsState {
  todoListLoaded: boolean;
}

const initialState: UiHintsState = {
  todoListLoaded: false,
};

export const reducer = createReducer(
  initialState,

  on(TodoDocuments.todos, (s) => ({ ...s, todoListLoaded: true })),
  on(FeatureEvents.featureEntered, () => initialState)
);
