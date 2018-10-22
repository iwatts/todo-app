import { TaskActions } from './to-do.actions';
import { ToggleModal } from './modal.actions';

export * from './to-do.actions';
export * from './modal.actions';

export type ToDoActions = | TaskActions | ToggleModal