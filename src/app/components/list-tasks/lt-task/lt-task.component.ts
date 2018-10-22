import { Component, Input } from '@angular/core';
import { Task } from 'app/store/reducers/to-dos.reducer';
import { Store } from '@ngrx/store';
import { ChangeStatusTask } from 'app/store/actions/to-do.actions';

@Component({
    selector: 'app-lt-task',
    templateUrl: './lt-task.component.html',
    styleUrls: ['./lt-task.component.scss']
})
export class ToDoTaskComponent {
    @Input() public item: Task;

    constructor(public store: Store<any>) { }

    public updateTaskStatus(item) {
        // item.done = !item.done;
        // return this.service.updateTaskStatus();
        this.store.dispatch(new ChangeStatusTask(item));
    }

}