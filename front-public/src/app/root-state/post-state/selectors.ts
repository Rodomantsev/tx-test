import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { featureAdapter, State } from './state';
import { Post } from "./post.models";

export const getError = (state: State): any => state.error;
export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectPostState: MemoizedSelector<object, State> = createFeatureSelector<State>('post');
export const selectAllPostItems: (state: object) => Post[] = featureAdapter.getSelectors(selectPostState).selectAll;

export const selectPostById = (id: string) =>
    createSelector(selectAllPostItems, (allPosts: Post[]) => {
        if (allPosts) {
            return allPosts.find(p => p.id + '' === id);
        } else {
            return null;
        }
    });

export const selectPostError: MemoizedSelector<object, any> = createSelector(selectPostState, getError);
export const selectPost: MemoizedSelector<object, boolean> = createSelector(selectPostState, getIsLoading);
