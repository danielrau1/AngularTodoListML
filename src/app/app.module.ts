import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // [3.1c]
import {FormsModule} from '@angular/forms'; // [3.1c]

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // [3.1c]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
