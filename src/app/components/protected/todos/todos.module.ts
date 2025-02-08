import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';

const routes = [
  {
    path: '',
    component: TodosComponent,
  },
];
@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TodosModule {}
