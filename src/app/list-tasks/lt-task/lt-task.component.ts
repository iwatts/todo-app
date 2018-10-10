import { Component, Input } from '@angular/core';
import { Task, TaskService } from '../../services/task.service';

@Component({
    selector: 'app-lt-task',
    templateUrl: './lt-task.component.html',
    styleUrls: ['./lt-task.component.scss']
})
export class LT_TaskComponent {
    @Input() public item: Task[] = [];

    constructor(public service: TaskService) { }

    updateTaskStatus(item) {
        item.done = !item.done;
        return this.service.updateTaskStatus();
    }

}