import { Component } from '@angular/core';
import {todoservice } from './todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todo_t;
  constructor(private tdl:todoservice){}
  mytodo={
    todo:''
  }
  addtodo(){
    this.mytodo.todo=this.todo_t;
    this.tdl.settodo(this.mytodo);
  }
}
