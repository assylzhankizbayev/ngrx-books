import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GoogleBooksService } from './book-list/books.service';
import * as BooksAction from './state/books.actions';
import * as BooksSelectors from './state/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books$ = this.store.pipe(select(BooksSelectors.selectBooks));
  bookCollection$ = this.store.pipe(select(BooksSelectors.selectBookCollection));

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.booksService.getBooks().subscribe(Book => {
      return this.store.dispatch(BooksAction.retriviedBookList({ Book }))
    });
  }

  onAdd(bookId) {
    this.store.dispatch(BooksAction.addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(BooksAction.removeBook({ bookId }));
  }
}
