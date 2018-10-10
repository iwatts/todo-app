import { Component, OnInit } from '@angular/core';
import { debug } from 'util';

import { TaskService } from './services/task.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    activeList = 'To Do';
    showModal = false;

    constructor(public service: TaskService) {

    }

    ngOnInit() {

    }

    getIncompleteTasks() {
        return this.service.getIncompleteTasks();
    }

    getCompleteTasks() {
        return this.service.getCompleteTasks();
    }

    modalDisplay() {
        this.showModal = !this.showModal;
    }


}