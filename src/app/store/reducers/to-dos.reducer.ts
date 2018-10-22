import { ToDoActionTypes, ToDoActions } from 'app/store/actions';

import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'environments/environment.prod';

let nextID = 0;

export interface State {
    todos: ToDoState;
}

export interface ToDoState {
    completeTasks: CompleteTask[];
    incompleteTasks: IncompleteTask[];
    showModal: boolean;
    activeList: List;
}

export enum TaskLists {
    completed = 'completed',
    incomplete = 'incomplete'
}

export type List = keyof typeof TaskLists

export const initialState: ToDoState = {
    completeTasks: [],
    incompleteTasks: [],
    showModal: false,
    activeList: TaskLists.incomplete
};

export const reducers: ActionReducerMap<State> = {
    todos: todoReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export function todoReducer(state = initialState, action: ToDoActions): ToDoState {
    const newState = {... state};
    

    switch (action.type) {
        case ToDoActionTypes.AddToDo:
            action.todo.id = nextID++;
            newState.incompleteTasks.push(action.todo as IncompleteTask);
            return newState;        
        case ToDoActionTypes.ChangeStatusTask:
            const {todo} = action
            if (isComplete(todo)) {
                const index = newState.completeTasks.findIndex(item => item.id === todo.id)
                newState.completeTasks.splice(index, 1)
                newState.incompleteTasks.push(toggleThing(todo))
            } else {
                const index = newState.incompleteTasks.findIndex(item => item.id === todo.id)
                newState.incompleteTasks.splice(index, 1)
                newState.completeTasks.push(toggleThing(todo))
            }
            return newState;

        default:
            return state;
    }
}



interface CompleteTask {
    done: true
}

interface IncompleteTask {
    done: false
}

type Task = CompleteTask|IncompleteTask

function toggleThing(task: CompleteTask): IncompleteTask
function toggleThing(task: IncompleteTask): CompleteTask
function toggleThing(task: Task): Task {
    if (task.done) {
        return {
            ...task,
            done: false
        } as IncompleteTask
    } else {
        return {
            ...task,
            done: true
        } as CompleteTask
    }
}

const myTrueThing: CompleteTask = {
    done: true as true
}

const myFalseThing: IncompleteTask = toggleThing(myTrueThing)

export function isComplete(task: Task): task is CompleteTask {
    return task.done
}