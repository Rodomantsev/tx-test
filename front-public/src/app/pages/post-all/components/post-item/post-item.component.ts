import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../../root-state/post-state/post.models";

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
    @Input() post: Post[];
}
