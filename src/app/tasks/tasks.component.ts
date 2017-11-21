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
    this.tasks[this.findInTasks('id', task.id)].isDone = !task.isDone;
  }

  deleteTask(task: Task): void {
    this.tasks.splice(this.findInTasks('id', task.id), 1);
  }

  onEnter(value: string):void {
    this.tasks.push({
      id: this.tasks.length + 1,
      name: value,
      isDone: false
    });
  }

  findInTasks(key: string, value: string): number {
    return this.tasks
      .map(function(el) {return el[key]})
      .indexOf(Number(value))
  }

}
