import { createActionGroup, emptyProps } from '@ngrx/store';

export const CounterEvents = createActionGroup({
  source: 'Counter Events',
  events: {
    'Count Incremented': emptyProps(),
    'Count Decremented': emptyProps(),
  },
});
