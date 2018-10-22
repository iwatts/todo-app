import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TaskLists } from 'app/store/reducers';


@Component({
    selector: 'app-lh-filter',
    templateUrl: './lh-filter.component.html',
    styleUrls: ['./lh-filter.component.scss']
})
export class ListHeaderFilterComponent {
    @Output() public select = new EventEmitter();
    @Input() public items = [TaskLists.incomplete, TaskLists.completed];
    public activeList = TaskLists.incomplete;

    public setActive(item) {
        this.select.emit(item);
        this.activeList = item;
    }

}