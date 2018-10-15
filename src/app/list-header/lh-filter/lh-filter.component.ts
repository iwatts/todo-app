import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-lh-filter',
    templateUrl: './lh-filter.component.html',
    styleUrls: ['./lh-filter.component.scss']
})
export class LH_FilterComponent {
    @Output() public select = new EventEmitter();
    @Input() public items = ['To Do', 'Completed'];
    activeList = 'To Do';

    setActive(item) {
        this.select.emit(item);
        this.activeList = item;
    }

}