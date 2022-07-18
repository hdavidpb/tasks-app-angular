import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ITasks } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TasksListComponent {
  constructor() {}

  @Input() tasks!: ITasks[];
  @Output() onDeleteTaskEvent = new EventEmitter<number>();
  @Output() onDoneTaskEvent = new EventEmitter<number>(); //number>();

  onDeleteTask(taskId: number): void {
    this.onDeleteTaskEvent.emit(taskId);
  }

  onDondeTask(taskId: number): void {
    this.onDoneTaskEvent.emit(taskId);
  }
}
