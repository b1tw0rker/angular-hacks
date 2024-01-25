import { createAction, createReducer, on } from '@ngrx/store';

export const increment = createAction('Increment');
export const decrement = createAction('Decrement');

export const counterReducer = createReducer(0,
   on(increment, state => state + 1),
   on(decrement, state => state - 1)
);
