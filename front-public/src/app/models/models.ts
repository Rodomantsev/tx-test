export interface IPost {
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
export interface IUser {
    id: number;
    email: string;
    username: string;
}

export interface IPostResponse {
    count: number;
    data: IPost[];
    ids: number[];
}

export enum LocalStorageEnum {
    currentUser = 'currentUser'
}


// export interface IPost {
//     id: number;
//     title: string;
//     tags: string[];
//
//     author?: string;
//     description: string;
//     created?: Date;
//     updated?: Date;
// }
