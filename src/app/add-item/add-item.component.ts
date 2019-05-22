                              // [3.2c]
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.sass']
})
export class AddItemComponent implements OnInit {

  title: string; // [3.1c]
  @Output() addTodo: EventEmitter<any> = new EventEmitter(); // [3.2c]

id = 3; // since in the beginning had 3 items

  constructor() { }

  ngOnInit() {
  }

  // [3.2b]
  onSubmit() {
    this.id += 1;
    const todo = {
      id: this.id,
      title : this.title,
      completed: false
    };
    // [3.2c]
    this.addTodo.emit(todo);
  }




}
