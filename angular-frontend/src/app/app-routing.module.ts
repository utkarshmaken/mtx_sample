import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list.component';
import { AddBookComponent } from './add-book.component';

const routes: Routes = [
  
  { path: 'todo', component: TodoListComponent },
  { path: 'add', component: AddBookComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }