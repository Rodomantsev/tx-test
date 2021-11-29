import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost, IPostResponse } from "../../../../../../front-public/src/app/models/models";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<IPostResponse> {
    return this.http.get<IPostResponse>(`http://localhost:3000/post/all`);
  }

  createPost(post): Observable<IPost> {
    return this.http.post<IPost>(`http://localhost:3000/post`, post);
  }

}
