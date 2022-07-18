import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ITasks } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  tasks: ITasks[] = JSON.parse(localStorage.getItem('tasks')!) || [];

  onAddNewTask(task: ITasks): void {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  onDeleteTask(taskId: number): void {
    const newTasks = this.tasks.filter((task) => task.id !== taskId);
    this.tasks = newTasks;
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  onIsDoneTask(taskId: number): void {
    const newTasks = this.tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      } else {
        return task;
      }
    });
    this.tasks = newTasks;

    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }
}
