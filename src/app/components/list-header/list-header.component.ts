import { Component, Output, EventEmitter } from '@angular/core';
import { List } from 'app/store/reducers';

@Component({
    selector: 'app-list-header',
    templateUrl: './list-header.component.html',
    styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent {
    @Output() public selectedList = new EventEmitter<List>();
    constructor() { }

    public onSelect(selectedList) {
        this.selectedList.emit(selectedList);
    }
}