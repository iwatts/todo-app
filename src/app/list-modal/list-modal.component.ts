import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskService, Task } from '../services/task.service';

@Component({
    selector: 'app-list-modal',
    templateUrl: './list-modal.component.html',
    styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent {
    @Input() public item: Task[] = [];
    @Output() public closeModal = new EventEmitter;

    public inputValue: string;

    constructor(public service: TaskService) { }

    clearValue() {
        this.inputValue = undefined;
    }

    onClose() {
        this.clearValue();
        this.closeModal.emit();
    }

    submitTask() {
        this.service.addTask({ id: 0, description: this.inputValue, done: false });
        this.onClose();
    }

    cancelTask() {
        this.onClose();
    }


}