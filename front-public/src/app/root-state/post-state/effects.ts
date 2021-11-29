import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap, tap } from 'rxjs/operators';

import * as featureActions from './actions';
import { PostsService } from "../../shared/services/posts/posts.service";

@Injectable()
export class PostStoreEffects {

    constructor(private postsService: PostsService, private actions$: Actions) {
    }

    getPosts$ = createEffect(() => this.actions$.pipe(
        tap(__ => {
            console.log('[tap]: Увидем сразу', __ );
        }),
        ofType<featureActions.LoadRequestAction>(featureActions.ActionTypes.LOAD_REQUEST),
        tap(__ => {
            console.log('[tap]: Увидем после диспача PostStoreActions.LoadRequestAction ', __ );
        }),
        startWith(new featureActions.LoadRequestAction()),
        switchMap(action => this.postsService.getAll()
            .pipe(
                map(items => new featureActions.LoadSuccessAction({items})),
                catchError(error => observableOf(new featureActions.LoadFailureAction({error})))
            )
        )
    ));

}
