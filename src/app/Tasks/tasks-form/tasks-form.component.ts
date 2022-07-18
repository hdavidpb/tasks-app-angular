import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITasks } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksFormComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}
  modelForm!: FormGroup;
  isInvalidForm: boolean = false;

  ngOnInit() {
    this.modelForm = this.buildFormControl();
  }

  @Output() onAddNewTaskEvent = new EventEmitter<ITasks>();

  onSubmit() {
    if (this.modelForm.invalid) {
      this.isInvalidForm = true;
      return;
    } else {
      this.isInvalidForm = false;
      const task: ITasks = { ...this.modelForm.value, id: Date.now() };
      this.onAddNewTaskEvent.emit(task);

      this.modelForm.patchValue({
        title: '',
        date: '',
        priority: '',
        description: '',
      });
    }
  }

  buildFormControl(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      priority: [false],
      description: ['', Validators.required],
    });
  }
}
