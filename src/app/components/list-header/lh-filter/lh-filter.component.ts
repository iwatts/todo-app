import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-lh-filter',
    templateUrl: './lh-filter.component.html',
    styleUrls: ['./lh-filter.component.scss']
})
export class ListHeaderFilterComponent {
    @Output() public select = new EventEmitter();
    @Input() public items = ['To Do', 'Completed'];
    public activeList = 'To Do';

    public setActive(item) {
        this.select.emit(item);
        this.activeList = item;
    }

}