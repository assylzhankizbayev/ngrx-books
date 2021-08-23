import { createReducer, on } from "@ngrx/store";
import * as BookActions from './books.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(BookActions.removeBook, (state, { bookId }) => state.filter(id => id !== bookId)),
  on(BookActions.addBook, (state, { bookId }) => state.indexOf(bookId) > -1 ? state : [ ...state, bookId ])
);
