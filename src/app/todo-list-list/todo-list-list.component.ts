import { Component, OnInit } from '@angular/core';
import { todoservice } from '../todo-list.service';

@Component({
  selector: 'app-todo-list-list',
  templateUrl: './todo-list-list.component.html',
  styleUrls: ['./todo-list-list.component.css']
})
export class TodoListListComponent implements OnInit {

  constructor(private todolist:todoservice) { }

  ngOnInit() {
    this.tdList=this.todolist.gettodo()

  }
  tdList=[]

}
