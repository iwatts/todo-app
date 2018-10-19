import { Component, Input } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';

@Component({
    selector: 'app-list-tasks',
    templateUrl: './list-tasks.component.html',
    styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent {

    @Input() public list: Task[] = [];

    constructor(public service: TaskService, public store : Store<State>) { 
        store.select(state => state)
    }

}