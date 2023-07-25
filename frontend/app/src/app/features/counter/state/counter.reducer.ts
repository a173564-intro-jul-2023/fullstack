import { createReducer, on } from '@ngrx/store';
import { CounterEvents, ValidCountByOptions } from './counter.actions';

export interface CountState {
  current: number;
  by: ValidCountByOptions;
}

const initialState: CountState = {
  current: 0,
  by: 1,
};

export const reducer = createReducer(
  initialState,
  // Increment
  on(CounterEvents.countIncremented, (oldState) => {
    return { ...oldState, current: oldState.current + oldState.by };
  }),

  // Decrement
  on(CounterEvents.countDecremented, (s) => ({
    ...s,
    current: s.current - s.by,
  })),

  // Reset
  on(CounterEvents.countReset, (s) => ({ ...s, current: 0 })),

  // Count by
  on(CounterEvents.countBySet, (s, a) => ({ ...s, by: a.by })),

  // Counter data
  on(CounterEvents.counterData, (s, a) => a.payload)
);
