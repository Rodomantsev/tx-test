import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PostStoreSelectors } from './post-state';

// @ts-ignore
export const selectError:     MemoizedSelector<object, string>  = createSelector( PostStoreSelectors.selectPostError, (postError: string) =>  postError );
export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector( PostStoreSelectors.selectPost, (post: boolean) => post);
