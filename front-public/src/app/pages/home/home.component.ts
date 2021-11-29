import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../shared/services/posts/posts.service";
import { BaseComponent } from "../../core/classes/base.component";
import { IPost } from "../../models/models";
import { PostStoreSelectors } from "../../root-state/post-state";
import { Store } from "@ngrx/store";
import { RootStoreState } from "../../root-state";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

    posts: IPost[] = [];

    constructor(private store$: Store<RootStoreState.State>) {
        super();
    }

    ngOnInit(): void {
        this.subs = this.store$.select(PostStoreSelectors.selectAllPostItems).subscribe((allPost: IPost[]) => {
            this.posts = allPost
        });
    }

}
