import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todo[]>;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.todos$ = this.apiService.getData('todos');
  }
}
