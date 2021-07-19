import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
})
export class AddBookComponent implements OnInit {
  book: Book = {
    title: '',
    author: '',
    city: ''
  };
  submitted = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  saveBook(): void {
    const data = {
      title: this.book.title,
      author: this.book.author,
      city: this.book.city
    };

    this.bookService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newBook(): void {
    this.submitted = false;
    this.book = {
      title: '',
      author: '',
      city: ''
    };
  }

}