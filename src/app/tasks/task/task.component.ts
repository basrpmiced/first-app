import { Component, inject, Input } from '@angular/core';
// import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";

import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

// interface Task { //moved to tasks/task/task.model.ts
//   id: string;
//   userId: string;
//   title: string;
//   summary: string;
//   dueDate: string;
// }

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService);

  onCompleteTask(){
    //this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }
}
