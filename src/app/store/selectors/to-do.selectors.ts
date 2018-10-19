import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToDoState } from "../reducers/to-dos.reducer";

export const todoState = createFeatureSelector<ToDoState>('todos');
export const todoList = createSelector(todoState, state => state.todos);