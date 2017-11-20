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

  ngOnInit() { }

  toggleDone(task: Task): void {
    for (let t in this.tasks) {
      if (this.tasks[t].id == task.id) {
        this.tasks[t].isDone = !task.isDone;
      }
    }
  }

  deleteTask(task: Task): void {
    for (let t in this.tasks) {
      if (this.tasks[t].id == task.id) {
        this.tasks.splice(Number(t),1);
      }
    }
  }

  onEnter(value: string):void {
    this.tasks.push({
      id: this.tasks.length + 1,
      name: value,
      isDone: false
    });
    console.log(this.tasks)
  }

}
