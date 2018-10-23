import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from 'app/store/reducers';
import { AddToDo } from 'app/store/actions/to-do.actions';
import { Task } from 'app/store/reducers/to-dos.reducer';

@Component({
    selector: 'app-list-modal',
    templateUrl: './list-modal.component.html',
    styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent {
    @Input() public item: Task[] = [];
    @Output() public closeModal = new EventEmitter;

    public inputValue: string;

    constructor(private store: Store<State>) { }

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

    public submitTask(inputValue) {
        const task = { id: null, description: inputValue, done: false as false };
        // this.service.addTask(task);
        this.store.dispatch(new AddToDo(task));

        this.onClose();
    }

    public cancelTask() {
        this.onClose();
    }


}