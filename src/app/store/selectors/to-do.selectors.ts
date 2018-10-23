import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToDoState} from "../reducers/to-dos.reducer";

export const todoState = createFeatureSelector<ToDoState>('todos')
export const completeTasks = createSelector(todoState, state => state.completeTasks)
export const incompleteTasks = createSelector(todoState, state => state.incompleteTasks)
export const activeList = createSelector(todoState, state => state.activeList)

export const showModal = createSelector(todoState, state => state.showModal)