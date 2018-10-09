import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from './task.service';
import { debug } from 'util';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'To Do List';
	completelist$: Observable<Task[]>;
	incompletelist$: Observable<Task[]>;
	showmodel = false;
	inputVal;
	itemProgress;
	itemID = 0;

	constructor(public service: TaskService) { }

	//default view
	ngOnInit() {
		this.fetchLists();
	}

    displayModel(onoff) {
		this.showmodel = onoff;
	}

	fetchLists() {
		this.completelist$ = this.service.getCompleteTasks();
        this.incompletelist$ = this.service.getIncompleteTasks();
	}

	itemUpdate(item) {
		this.service.updateTask({...item, done: !item.done})
	}

	itemSubmit() {
		
		this.service.addTask({tid: this.itemID, desc: this.inputVal, done: false});
		
		this.displayModel(false);

		this.inputVal = undefined;
		this.itemID++;
	}
}
