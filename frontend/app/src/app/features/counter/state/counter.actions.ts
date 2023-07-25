import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CounterEvents = createActionGroup({
  source: 'Counter Events',
  events: {
    'Count Incremented': emptyProps(),
    'Count Decremented': emptyProps(),
    'Count Reset': emptyProps(),
    'Count By Set': props<{ by: ValidCountByOptions }>(),
  },
});

export type ValidCountByOptions = 1 | 3 | 5;
