import { TaskService } from './../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../services/models/task.model';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {

  allTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.onUpdateTasks().subscribe(() => {
      this.loadTasks()
    });
    this.loadTasks()
  }

  private loadTasks() {
    this.taskService.listAllTask()
    .subscribe((tasks: Task[]) => {
      this.allTasks = tasks;
    });
  }

}
