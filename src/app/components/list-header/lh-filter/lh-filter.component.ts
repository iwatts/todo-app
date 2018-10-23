import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ListType, TaskLists } from 'app/store/reducers';
import { ShowList } from 'app/store/actions';

@Component({
    selector: 'app-lh-filter',
    templateUrl: './lh-filter.component.html',
    styleUrls: ['./lh-filter.component.scss']
})
export class ListHeaderFilterComponent {
    public items = [TaskLists.incomplete, TaskLists.completed]
    public selection = TaskLists.incomplete

    constructor(private store: Store<ListType>) { }

    public onSelect(listName) {
        this.store.dispatch(new ShowList(listName))
        this.selection = listName
    }

}