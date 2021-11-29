import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPost } from "../../../models/models";
import { Observable } from "rxjs";
import { HttpService } from "../http/http.service";
import { Config } from "../../../core/configs/config.service";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private config: Config) { }

  getAll(): Observable<IPost[]> {
    // TODO: create api service
    return this.http.get<IPost[]>(`${this.config.api}post/all`)
  }
  create(post: IPost): Observable<IPost> {
    return this.http.post(`${this.config.api}post`, post) as Observable<IPost>;
  }

  getById(id: string): Observable<IPost> {
      return this.http.get(`${this.config.api}post/${+id}`) as Observable<IPost>;
  }
}
