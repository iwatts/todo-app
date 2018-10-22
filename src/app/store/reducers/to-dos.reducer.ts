import { Action } from '@ngrx/store';
import { ToDoActionTypes, ToDoActions } from 'app/store/actions/to-do.actions';
import { isNgTemplate } from '@angular/compiler';
import { Task } from 'app/services/task.service';


export interface ToDoState {
    todos: Array<Task>;
}

export const initialState: ToDoState = {
    todos: [],
};

export function todoReducer(state = initialState, action: ToDoActions): ToDoState {
    const newState = {... state};

    switch (action.type) {
        case ToDoActionTypes.AddToDo:
            newState.todos.push(action.todo);
            return newState;
        case ToDoActionTypes.RemoveToDo:
            newState.todos.filter(item => item !== action.todo);
            return newState;
        
        case ToDoActionTypes.ChangeStatusTask:
            newState.todos
                .filter(item => item === action.todo)
            return newState;

        default:
            return state;
    }
}
