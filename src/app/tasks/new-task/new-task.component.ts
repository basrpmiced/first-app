import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService); //can use this instead initializing via constructor

  // enteredTitle = signal(''); //signals will automatically work with 2 way bindings
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel(){
    this.close.emit();
  }
  
  onSubmit(){
    this.tasksService.addTask({  
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);
    
    this.close.emit();
    // this.add.emit({  //without using services
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate,
    // })
  }

  // addTask(){
  //   let id = 't' + (this.tasks.length + 1);
  //   let dueDate = new Date();
  //   dueDate.setDate(dueDate.getDate() + 7);

  //   let task = {id: id,
  //               userId: this.userId,
  //               title: this.addTitle,
  //               summary: this.addSummary,
  //               dueDate: dueDate.getFullYear().toString()+"-"+dueDate.getMonth().toString()+"-"+dueDate.getDate().toString()
  //   }

  //   this.tasks.push(task);
  //   this.addSummary="";
  //   this.addTitle="";
  // }
}
