import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService{
    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary: 'Learning all the basic and advanced features',
          dueDate: '2025-12-31'
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
    ]

    getUserTasks(userId: string) {        
        return this.tasks.filter((task) => task.userId === userId);          
    }

    addTask(taskData: NewTaskData, userId:string){
        let id = 't' + (this.tasks.length + 1);  

        this.tasks.unshift({
        id: id,
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
        });        
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
}