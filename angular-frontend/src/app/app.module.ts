import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';
import { AddBookComponent } from './add-book.component';
import { BookService } from './book.service';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [TodoService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }