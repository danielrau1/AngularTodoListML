                        // [2.2c]   [4.1c]
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../models/todo'; // [2.2a]
import {Router} from '@angular/router';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {

  @Input() todo1: Todo; // [2.2b]
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); // [4.1c]

                        // [5.1b]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // [4.1b]
  onDelete(todo1) {
    // console.log('delete');
    this.deleteTodo.emit(todo1); // [4.1c]
  }

  // [5.1a]
  onEdit(todo1) {

    this.router.navigate(['/edit', todo1.id, todo1.title]);
  }



}
