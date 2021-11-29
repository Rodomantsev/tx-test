import { Component, OnInit, Sanitizer } from '@angular/core';
import { PostsService } from "../../shared/services/posts/posts.service";
import { IPost } from "../../models/models";
import { BaseComponent } from "../../core/classes/base.component";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { PostStoreSelectors } from "../../root-state/post-state";
import { Post } from "../../root-state/post-state/post.models";
import { Store } from "@ngrx/store";
import { RootStoreState } from "../../root-state";
import { selectPostById } from "../../root-state/post-state/selectors";

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent extends BaseComponent implements OnInit {

    id: string = this.route.snapshot.paramMap.get('id');
    post: IPost;

    constructor(
        private postsServices: PostsService,
        private domSanitizer: DomSanitizer,
        private route: ActivatedRoute,
        private store$: Store<RootStoreState.State>) {
            super();
    }

    ngOnInit(): void {
        this.subs = this.store$.select(selectPostById(this.id)).subscribe((post: Post) => {
            this.post = post;
        });
    }

    bypassSecurityTrustHtml(data: string): SafeHtml {
        return this.domSanitizer.bypassSecurityTrustHtml(data);
    }

}
