import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo'; // [2.1a]

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  // [2.1b]
  todos: Todo[] = [
    {
      id: 1,
      title: 'Todo One',
      completed: false
    },
    {
      id: 2,
      title: 'Todo Two',
      completed: true
    },
    {
      id: 3,
      title: 'Todo Three',
      completed: false
    }
  ];


constructor() { }

ngOnInit() {
  // console.log(this.todos);
  return this.todos;
  }

// [3.2e]
  addTodo(todo: Todo) {
// console.log(todo);
       this.todos.push(todo);

  }


  // [4.1e]
  deleteTodo(todo: Todo) {
    // console.log(todo);
     this.todos = this.todos.filter(t => t.title !== todo.title);

  }

}
