import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo'; // [2.1a]
import {ActivatedRoute} from '@angular/router'; // [5.1f]

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  // [5.1f]
  public id1;
  public title1;

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

                  // [5.1f]
constructor(private route: ActivatedRoute) { }

ngOnInit() {
// [5.1f]
if (this.route.snapshot.paramMap.get('id')) {
  this.id1 = parseInt(this.route.snapshot.paramMap.get('id'));
  this.title1 = (this.route.snapshot.paramMap.get('title'));
  // console.log(this.id1);
  // console.log(this.title1);

  for (let i = 0; i < this.todos.length; i++) {
      if (this.id1 === this.todos[i].id) {
        this.todos[i].title = this.title1;
        console.log(this.todos[i].id);
        console.log(this.todos[i].title);
      }
  }

  return this.todos;
} else  {
  return this.todos;
}
  }

// [3.2e]
  addTodo(todo: Todo) {
// console.log(todo);
       this.todos.push(todo);

  }


  // [4.1e]
  deleteTodo(todo: Todo) {
    // console.log(todo);
     this.todos = this.todos.filter(t => t.id !== todo.id);

  }

}
