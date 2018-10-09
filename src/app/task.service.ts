import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

	Tasks:Task[] = [];

	constructor() { }

	getCompleteTasks() {
		return this.Tasks.filter(task => task.done);
	}

	getIncompleteTasks() {
		return this.Tasks.filter(task => !task.done);
	}

	addTask(task:Task) {
		this.Tasks.push(task);
	}
}

export interface Task {
	desc:string
	done:boolean
}
