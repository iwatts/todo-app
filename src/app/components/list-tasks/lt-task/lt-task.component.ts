import { Component, Input } from '@angular/core';
import { Task, TaskService } from '../../../services/task.service';

@Component({
    selector: 'app-lt-task',
    templateUrl: './lt-task.component.html',
    styleUrls: ['./lt-task.component.scss']
})
export class ToDoTaskComponent {
    @Input() public item: Task[] = [];

    constructor(public service: TaskService) { }

    public updateTaskStatus(item) {
        item.done = !item.done;
        return this.service.updateTaskStatus();
    }

}