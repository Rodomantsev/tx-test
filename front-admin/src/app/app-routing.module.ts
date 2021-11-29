import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from "./pages/create-post/create-post.component";
import { CreateUserComponent } from "./pages/create-user/create-user.component";
import { MainComponent } from "./pages/main/main.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./core/auth.guard";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'create-post',
        component: CreatePostComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'create-user',
        component: CreateUserComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
