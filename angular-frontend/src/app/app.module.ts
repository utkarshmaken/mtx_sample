import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';
import { AddBookComponent } from './add-book.component';
import { BookService } from './book.service';
import { AppRoutingModule } from './app-routing.module';
import { BookListComponent } from './book-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddBookComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }