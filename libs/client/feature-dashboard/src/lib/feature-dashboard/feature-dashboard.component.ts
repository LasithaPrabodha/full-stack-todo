import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@fst/client/data-access';
import { ToDoComponent } from '@fst/client/ui-components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ITodo } from '@fst/shared/domain';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'full-stack-todo-feature-dashboard',
  standalone: true,
  imports: [CommonModule, ToDoComponent, FontAwesomeModule],
  templateUrl: './feature-dashboard.component.html',
  styleUrl: './feature-dashboard.component.scss',
})
export class FeatureDashboardComponent implements OnInit {
  private readonly apiService = inject(ApiService);

  todos$ = new BehaviorSubject<ITodo[]>([]);

  trackTodo(idx: number, todo: ITodo) {
    return todo.id;
  }

  ngOnInit(): void {
    this.refreshItems();
  }

  refreshItems() {
    this.apiService
      .getAllToDoItems()
      .pipe(take(1))
      .subscribe((items) => this.todos$.next(items));
  }

  toggleComplete(todo: ITodo) {
    this.apiService
      .updateToDo(todo.id, { completed: !todo.completed })
      .pipe(take(1))
      .subscribe(() => {
        this.refreshItems();
      });
  }

  deleteTodo({ id }: ITodo) {
    this.apiService
      .deleteToDo(id)
      .pipe(take(1))
      .subscribe(() => {
        this.refreshItems();
      });
  }
}
