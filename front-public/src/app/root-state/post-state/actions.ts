import { Action } from '@ngrx/store';
import { IPost } from "../../models/models";

export enum ActionTypes {
    LOAD_REQUEST = '[Post] Load Request',
    LOAD_FAILURE = '[Post] Load Failure',
    LOAD_SUCCESS = '[Post] Load Success'
}

export class LoadRequestAction implements Action {
    readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
    readonly type = ActionTypes.LOAD_FAILURE;

    constructor(public payload: { error: string }) {
    }
}

export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: { items: IPost[] }) {
    }
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
