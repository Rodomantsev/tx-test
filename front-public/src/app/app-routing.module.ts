import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { PostAllComponent } from "./pages/post-all/post-all.component";
import { PostDetailComponent } from "./pages/post-detail/post-detail.component";
import { LoginComponent } from "./pages/login/login.component";
import { PostCreateComponent } from "./pages/post-create/post-create.component";
import { CreateAllComponent } from "./pages/create-all/create-all.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'post-all',
        component: PostAllComponent,
    },
    {
        path: 'post-detail/:id',
        component: PostDetailComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'post-create',
        component: PostCreateComponent,
    },
    {
        path: 'create-all',
        component: CreateAllComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
