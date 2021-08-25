import { createAction, props } from "@ngrx/store";

export const addBook = createAction('[BOOK List] Add Book', props<{ bookId: string }>());

export const removeBook = createAction('[BOOK Collection] Remove Book', props<{ bookId: string }>());

export const retriviedBookList = createAction('[BOOK List/API] Retrieve Books Success', props<{ Book: any }>());
