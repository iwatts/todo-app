import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { IncompleteTask, CompleteTask } from './store/reducers/to-dos.reducer';
import { completeTasks, incompleteTasks } from './store/selectors';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    public showModal = false;
    public completeTasks$: Observable<CompleteTask[]>;
    public incompleteTasks$: Observable<IncompleteTask[]>;

    constructor(public store: Store<any>) {
        this.completeTasks$ = store.select(completeTasks);
        this.incompleteTasks$ = store.select(incompleteTasks);
    }

    public modalDisplay() {
        this.showModal = !this.showModal;
    }


}