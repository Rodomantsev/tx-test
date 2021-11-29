export interface Post {
    id?: number;
    title: string;
    author: string;
    category: string;
    text: string;
    date: string;
    imgBig: string;
    imgSmall: string;
    description: string;
}

export interface PostResult {
    type: string;
    value: Post[];
}
