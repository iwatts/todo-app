import { Action } from '@ngrx/store';
import { Task, ListType, } from '../reducers/to-dos.reducer';

export const SHOW_LIST = '[ToDo] Show Selected List'
export const ADD_TO_DO = '[ToDo] Add ToDo'
export const CHANGE_TASK_STATUS = '[ToDo] Change ToDo Status'

export class ShowList implements Action {
    public readonly type = SHOW_LIST;

    constructor(public list: ListType) {}
}

export class AddToDo implements Action {
    public readonly type = ADD_TO_DO;

    constructor(public todo: Task) {}
}

export class ChangeStatusTask implements Action {
    public readonly type = CHANGE_TASK_STATUS;

    constructor(public todo: Task) {}
}
  

export type TaskActions = ShowList | AddToDo | ChangeStatusTask;
