import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { UsersService } from "../../shared/services/user/users.service";
import { IPostResponse, IUser } from "../../../../../front-public/src/app/models/models";
import { PostsService } from "../../shared/services/posts/posts.service";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {


    public Editor = ClassicEditor;
    public currentUser: IUser;

    public form: FormGroup = new FormGroup({
        title: new FormControl('title title title title title title title ', [Validators.required]),
        seokeywords: new FormControl('seokeywords seokeywords seokeywords seokeywords seokeywords ', [Validators.required]),
        description: new FormControl('description description description description description ', [Validators.required]),
        text: new FormControl('text text text text text text text text text ', [Validators.required]),
        tags: new FormControl('tags tags tags tags tags tags tags tags tags ', [Validators.required]),
        imgBig:  new FormControl('//via.placeholder.com/846x155'),
        imgSmall:  new FormControl('//via.placeholder.com/280x155')
    });

    constructor(private http: HttpClient,
                private userService: UsersService,
                private postsService: PostsService) {
    }

    ngOnInit(): void {

        this.userService.getCurrentUser().subscribe((user: IUser) => {
            this.currentUser = user;
        });

        this.postsService.getAll().subscribe((posts: IPostResponse) => {
            console.log('posts', posts);
        });

    }

    addPost(): void {
        if (this.form.valid) {
            const post = {...this.form.value, author: this.currentUser.id};
            this.postsService.createPost(post).subscribe(result => {
                console.log(result);
            });
        }
    }

}
