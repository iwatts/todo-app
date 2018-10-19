import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ToDoState, todoReducer } from './to-dos.reducer';

export interface State {
    todos: ToDoState;
}

export const reducers: ActionReducerMap<State> = {
    todos: todoReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
