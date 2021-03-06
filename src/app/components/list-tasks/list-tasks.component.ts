import { Component, Input } from '@angular/core';
import { Task } from 'app/store/reducers';


@Component({
    selector: 'app-list-tasks',
    templateUrl: './list-tasks.component.html',
    styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent {

    @Input() public list: Task[];

    constructor() {}

}