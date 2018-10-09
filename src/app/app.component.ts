import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from './task.service';
import { debug } from 'util';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'To Do List';
	incomplelist: Task[];
	completelist: Task[];
	showmodel = false;
	td = true;
	inputVal;

	constructor(public service: TaskService) { }

	displayModel(onoff) {
		this.showmodel = onoff;
	}

	//default view
	ngOnInit() {
		this.fetchLists();
	}

	fetchLists() {
		this.incomplelist = this.service.getIncompleteTasks();
		this.td = true;
	}
	fetchDone() {
		this.completelist = this.service.getCompleteTasks();
		this.td = false;
	}

	itemUpdate(item) {

	}

	itemSubmit() {

		this.service.addTask({desc: this.inputVal, done: false});
		this.displayModel(false);
		this.fetchLists();
		this.inputVal = undefined;
	}
}
