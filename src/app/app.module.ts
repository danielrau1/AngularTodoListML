import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // [3.1c]
import {FormsModule} from '@angular/forms'; // [3.1c]


import { AppRoutingModule } from './app-routing.module'; // [5.1b]
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddItemComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // [5.1b]
    FormsModule, // [3.1c]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
