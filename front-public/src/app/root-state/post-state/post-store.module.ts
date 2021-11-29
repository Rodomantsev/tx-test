import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('post', featureReducer),
        EffectsModule.forFeature([PostStoreEffects])
    ],
    providers: [PostStoreEffects]
})
export class PostStoreModule {
}
