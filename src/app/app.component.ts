import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { IncompleteTask, CompleteTask, ListType } from './store/reducers/to-dos.reducer';
import { completeTasks, incompleteTasks, activeList, showModal } from './store/selectors';
import { ToggleModal } from './store/actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    public showModal: Observable<boolean>
    public selection: Observable<ListType>
    public completeTasks$: Observable<CompleteTask[]>
    public incompleteTasks$: Observable<IncompleteTask[]>
    
    constructor(public store: Store<any>) {
        this.completeTasks$ = store.select(completeTasks)
        this.incompleteTasks$ = store.select(incompleteTasks)
        this.selection = store.select(activeList)
        this.showModal = store.select(showModal)
    }

    public modalDisplay() {
        this.store.dispatch(new ToggleModal());
    }


}