import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostAllComponent } from './pages/post-all/post-all.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCreateComponent } from './pages/post-create/post-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from "./core/classes/base.component";
import { SpinnerComponent } from './shared/component/spinner/spinner.component';
import { LoaderBlackListToken } from "./core/interceptors/http-loader.interceptor";
import { CreateAllComponent } from './pages/create-all/create-all.component';
import { ComponentsModule } from "./shared/component/components.module";
import { RootStoreModule } from "./root-state";
import { PostItemComponent } from './pages/post-all/components/post-item/post-item.component';
import { PostsService } from "./shared/services/posts/posts.service";

// EXAMPLE
// const LoaderBlackList = [
//     {
//         method: ['POST'],
//         url: 'api/example'
//     },
// ];

const blackList = [];

@NgModule({
    declarations: [
        AppComponent,
        BaseComponent,
        PostAllComponent,
        PostDetailComponent,
        HomeComponent,
        LoginComponent,
        PostCreateComponent,
        SpinnerComponent,
        CreateAllComponent,
        PostItemComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        RootStoreModule,
    ],
    providers: [
        PostsService,
        {
            provide: LoaderBlackListToken,
            useValue: []
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
