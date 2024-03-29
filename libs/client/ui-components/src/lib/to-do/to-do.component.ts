import {
  ChangeDetectionStrategy,
  Component,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITodo } from '@fst/shared/domain';
import { faCheck, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCircle as faCircleOutline,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'fst-todo',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoComponent {
  @Input() todo: ITodo | undefined;

  @Output() toggleComplete = new EventEmitter<ITodo>();
  @Output() editTodo = new EventEmitter<ITodo>();
  @Output() deleteTodo = new EventEmitter<ITodo>();

  faCheck = faCheck;
  faCircleOutline = faCircleOutline;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  /**
   * Simply emit the opposite of the current completed value
   */
  triggerToggleComplete() {
    this.toggleComplete.emit(this.todo);
  }

  /**
   * Emit the current todo data so that a service or parent component
   * knows what to work with.
   */
  triggerEdit() {
    this.editTodo.emit(this.todo);
  }

  /**
   * Emit the current todo data, although only the ID will most likely
   * be needed for deletion.
   */
  triggerDelete() {
    this.deleteTodo.emit(this.todo);
  }
}
