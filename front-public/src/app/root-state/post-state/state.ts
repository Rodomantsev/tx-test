import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Post } from "./post.models";

export const featureAdapter: EntityAdapter<Post> = createEntityAdapter<Post>({
    selectId: model => model.id,
    sortComparer: (a: Post, b: Post): number => b.id.toString().localeCompare(a.id + '')
});

export interface State extends EntityState<Post> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
