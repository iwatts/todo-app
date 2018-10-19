import { Action } from '@ngrx/store';

export enum ToDoActionTypes {
    LoadToDos = '[ToDo] Load ToDos',
    AddToDo = '[ToDo] Add ToDo',
    RemoveToDo = '[ToDo] Remove ToDo',
    ChangeStatusTask = '[ToDo] Change ToDo Status'
}

export class LoadToDos implements Action {
    public readonly type = ToDoActionTypes.LoadToDos;
}

export class AddToDo implements Action {
    public readonly type = ToDoActionTypes.AddToDo;

    constructor(public todo: object) {}
}

export class RemoveToDo implements Action {
    public readonly type = ToDoActionTypes.RemoveToDo;

    constructor(public todo: object) {}
}

export class ChangeStatusTask implements Action {
    public readonly type = ToDoActionTypes.ChangeStatusTask;

    constructor(public todo: object) {}
}
  

export type ToDoActions = LoadToDos | AddToDo | RemoveToDo | ChangeStatusTask;
