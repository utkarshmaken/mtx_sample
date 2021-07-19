import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from './book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent implements OnInit {
  currentBook: Book = {
    title: '',
    author: '',
    city: ''
  };
  message = '';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.route.snapshot.params.id);
  }

  getBook(id: string): void {
    this.bookService.get(id)
      .subscribe(
        data => {
          this.currentBook = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
    
   

    
  updateBook(): void {
    this.message = '';

    this.bookService.update(this.currentBook.id, this.currentBook)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This book was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  /*deleteBook(): void {
    this.bookService.delete(this.currentBook.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/books']);
        },
        error => {
          console.log(error);
        });
  }*/
}