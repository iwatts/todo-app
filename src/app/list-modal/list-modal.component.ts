import { Component, OnInit, Input } from '@angular/core';
import { TaskService, Task } from '../services/task.service';

@Component({
    selector: 'app-list-modal',
    templateUrl: './list-modal.component.html',
    styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {
    @Input() public item: Task[] = [];

    public inputValue: string;

    constructor(public service: TaskService) { }

    ngOnInit() {

    }

    clearValue() {
        this.inputValue = undefined;
    }

    submitTask() {
        this.service.addTask({ id: 0, description: this.inputValue, done: false });
        this.clearValue();
    }

    cancelTask() {
        this.clearValue();
    }


}