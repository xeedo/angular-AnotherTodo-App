import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = TASKS;


  constructor() { }

  ngOnInit() {
  }

  markDone(task: Task): void {
    for (let t in this.tasks) {
      if (this.tasks[t].id == task.id) {
        this.tasks[t].isDone = true;
      };
    }
  }

  markUndone(task: Task): void {
    for (let t in this.tasks) {
      if (this.tasks[t].id == task.id) {
        this.tasks[t].isDone = false; 
      };
    }
  }

}
