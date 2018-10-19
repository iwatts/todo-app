import { Component, OnInit } from '@angular/core';
import { debug } from 'util';

import { TaskService } from './services/task.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    public activeList = 'To Do';
    public showModal = false;

    constructor(public service: TaskService) {

    }

    public getIncompleteTasks() {
        return this.service.getIncompleteTasks();
    }

    public getCompleteTasks() {
        return this.service.getCompleteTasks();
    }

    public modalDisplay() {
        this.showModal = !this.showModal;
    }


}