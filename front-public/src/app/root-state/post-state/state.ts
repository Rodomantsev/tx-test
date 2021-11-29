import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IPost } from 'src/app/models/models';

export const featureAdapter: EntityAdapter<IPost> = createEntityAdapter<IPost>({
    selectId: model => model.id,
    sortComparer: (a: IPost, b: IPost): number => b.id.toString().localeCompare(a.id + '')
});

export interface State extends EntityState<IPost> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
