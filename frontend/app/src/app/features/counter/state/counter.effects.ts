import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { tap } from 'rxjs';
import { CounterEvents } from './counter.actions';
import { Store } from '@ngrx/store';
import { selectCountBranch } from '.';

@Injectable()
export class CounterEffects {
  // Logs things to the console
  //   logItAll$ = createEffect(
  //     () => {
  //       return this.actions$.pipe(
  //         tap((action) => console.log(`Got an action of type ${action.type}`))
  //       );
  //     },
  //     { dispatch: false }
  //   );

  // an effect that turns any countIncremented, countDecremented, countReset, countBySet -> write the counter data to localstorage
  saveCounterState$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          CounterEvents.countBySet,
          CounterEvents.countDecremented,
          CounterEvents.countIncremented,
          CounterEvents.countReset
        ),
        concatLatestFrom(() => this.store.select(selectCountBranch)),
        tap(([action, state]) =>
          localStorage.setItem('count-data', JSON.stringify(state))
        )
      );
    },
    { dispatch: false }
  );
  constructor(private readonly actions$: Actions, private store: Store) {}
}
