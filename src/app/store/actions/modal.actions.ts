import { Action } from '@ngrx/store';

export const TOGGLE_MODAL = '[ToDo] Toggle Create Dialogue';
export class ToggleModal implements Action {
    public readonly type = TOGGLE_MODAL;
}