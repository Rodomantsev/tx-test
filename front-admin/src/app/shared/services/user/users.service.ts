import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IUser } from "../../../../../../front-public/src/app/models/models";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private User: IUser;


  constructor(private http: HttpClient) {
  }

  getCurrentUser(): Observable<IUser> {
    if (this.User) {
      return of(this.User);
    }
    return this.http.get<IUser>(`http://localhost:3000/users/currentUser`)
      .pipe(map((user: IUser) => {
        this.setCurrentUser(user);
        return user;
      }));
  }

  setCurrentUser(user: IUser): void {
    this.User = user;
  }

  createUser(user: any): any {
    return this.http.post<any>(`http://localhost:3000/users`, user)
      .pipe(map(_ => {
        alert('пользователь успешно создан');
      }));
  }
}
