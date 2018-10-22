import { Action } from '@ngrx/store';
import { List, IncompleteTask } from '../reducers/to-dos.reducer';

export enum ToDoActionTypes {
    LoadToDos = '[ToDo] Load ToDos',
    AddToDo = '[ToDo] Add ToDo',
    ChangeStatusTask = '[ToDo] Change ToDo Status'
}

export class LoadToDos implements Action {
    public readonly type = ToDoActionTypes.LoadToDos;
}

export class AddToDo implements Action {
    public readonly type = ToDoActionTypes.AddToDo;

    constructor(public todo: IncompleteTask) {}
}

export class ChangeStatusTask implements Action {
    public readonly type = ToDoActionTypes.ChangeStatusTask;

    constructor(public todo: List) {}
}
  

export type TaskActions = LoadToDos | AddToDo | ChangeStatusTask;
