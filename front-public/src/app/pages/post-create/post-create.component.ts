import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { PostsService } from "../../shared/services/posts/posts.service";
import { IPost } from "../../models/models";
import { BaseComponent } from "../../core/classes/base.component";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent extends BaseComponent implements OnInit {

  // TODO: create auth user service and put user id in author prop
  // TODO: maybe need to create file service
  form: FormGroup = new FormGroup({
    title:  new FormControl('some mock title', Validators.required),
    author:  new FormControl('some mock author'),
    category:  new FormControl('some mock category'),
    text:  new FormControl('This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'),
    description:  new FormControl('This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'),
    date:  new FormControl(new Date()),
    imgBig:  new FormControl('//via.placeholder.com/846x155'),
    imgSmall:  new FormControl('//via.placeholder.com/280x155')
  })

  constructor(private postsService: PostsService) {
    super();
  }

  ngOnInit(): void { }

  create(): void {
    this.subs = this.postsService.create(this.form.value).subscribe((newPost: IPost) => {
      console.log('result', newPost);
      // TODO: put new post to NGRX
    })
  }
}
