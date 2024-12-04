import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input({required:true}) userName!: string;
  @Input({required: true}) userId!:string;
  @Input({required: true}) name!: string; 
  isAddingTask = false;

  // addSummary: string="";
  // addTitle: string="";

  // tasks = [ //moved to tasks.service.ts
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary: 'Learning all the basic and advanced features',
  //     dueDate: '2025-12-31'
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u3',
  //     title: 'Build first prototype',
  //     summary: 'Build a first prototype of the online shop website',
  //     dueDate: '2024-05-31',
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u3',
  //     title: 'Prepare issue template',
  //     summary:
  //       'Prepare and describe an issue template which will help with project management',
  //     dueDate: '2024-06-15',
  //   },
  // ]

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() { 
    return this.tasksService.getUserTasks(this.userId);
  //   return this.tasks.filter((task) => task.userId === this.userId);//moved to tasks.service.ts
  }

  // onCompleteTask(id: string){
  //   this.tasksService.removeTask(id);
  // //  this.tasks = this.tasks.filter((task) => task.id !== id); // moved to task.service.ts
  // }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

  // onAddTask(){ 
  //   // let id = 't' + (this.tasks.length + 1);  // moved to task.service.ts

  //   // this.tasks.unshift({
  //   //   id: id,
  //   //   userId: this.userId,
  //   //   title: taskData.title,
  //   //   summary: taskData.summary,
  //   //   dueDate: taskData.date,
  //   // });
  //   this.isAddingTask=false;
  // }

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
