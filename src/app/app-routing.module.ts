import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {path: '', component: TodosComponent}, // [2]
  {path: 'edit/:id/:title', component: EditComponent}, // [5]
  {path: 'sendEdit/:id/:title', component: TodosComponent}, // [5.1e]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
