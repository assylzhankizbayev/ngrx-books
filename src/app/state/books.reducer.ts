import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/books.model";
import * as BooksAction from './books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksAction.retriviedBookList, (state, { Book }) => [...Book])
);
