import { Component, Input, OnInit } from '@angular/core';
interface IPost {
    id: number;
    title: string;
    author: string;
    category: string;
    text: string;
    date: string;
    imgBig: string;
    imgSmall: string;
    description: string;
}
@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
    @Input() post: IPost;
}
