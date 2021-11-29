import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { MainComponent } from './pages/main/main.component';
import { InputErrorMsgComponent } from "./component/input-error-msg/input-error-msg.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './pages/login/login.component';
import { jwtInterceptorProvider } from "./core/jwt.interceptor";
import { AuthInterceptor } from "./core/auth.interceptors";
import { ErrorInterceptor } from "./core/error.interceptor";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    CreatePostComponent,
    MainComponent,
    InputErrorMsgComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        CKEditorModule,
    ],
  providers: [
      AuthInterceptor,
      jwtInterceptorProvider,
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
