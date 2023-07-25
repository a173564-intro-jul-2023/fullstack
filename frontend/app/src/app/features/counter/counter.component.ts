import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CounterEvents } from './state/counter.actions';
import { selectCounterCurrent } from './state';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  current = this.store.selectSignal(selectCounterCurrent);

  constructor(private readonly store: Store) {}

  increment() {
    this.store.dispatch(CounterEvents.countIncremented());
  }

  decrement() {
    this.store.dispatch(CounterEvents.countDecremented());
  }
}
