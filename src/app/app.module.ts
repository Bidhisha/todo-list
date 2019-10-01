import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListInputComponent } from './todo-list-input/todo-list-input.component';
import { TodoListListComponent } from './todo-list-list/todo-list-list.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { todoservice } from './todo-list.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListInputComponent,
    TodoListListComponent,
    TodoListFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [todoservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
