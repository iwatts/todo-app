import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { State } from 'app/store/reducers';
import { Store } from '@ngrx/store';
import { AddToDo } from 'app/store/actions/to-do.actions';

@Component({
    selector: 'app-list-modal',
    templateUrl: './list-modal.component.html',
    styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent {
    @Input() public item: Task[] = [];
    @Output() public closeModal = new EventEmitter;

    public inputValue: string;

    constructor(public service: TaskService, private store: Store<State>) { }

    private clearValue() {
        this.inputValue = undefined;
    }
    private onKeydown(event) {
        // this.submitTask();
    }

    public onClose() {
        this.clearValue();
        this.closeModal.emit();
    }

    public submitTask(todo : string) {
        // this.service.addTask({ id: 0, description: this.inputValue, done: false });
        const task = { id: 0, description: todo, done: false }
        this.store.dispatch(new AddToDo(task));

        this.onClose();
    }

    public cancelTask() {
        this.onClose();
    }


}