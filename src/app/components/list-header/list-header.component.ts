import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-list-header',
    templateUrl: './list-header.component.html',
    styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent {
    @Output() public selectedList = new EventEmitter();
    constructor() { }

    public onSelect(selectedList) {
        this.selectedList.emit(selectedList);
    }
}