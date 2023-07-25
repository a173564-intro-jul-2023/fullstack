import { createReducer } from '@ngrx/store';

export interface CountState {
  current: number;
}

const initialState: CountState = {
  current: 0,
};

export const reducer = createReducer(initialState);
