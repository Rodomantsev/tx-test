import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IUser } from "../../../models/models";
import { Config } from "../../../core/configs/config.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private User: IUser;


  constructor(private http: HttpClient, private constants: Config) {
  }

  getCurrentUser(): Observable<IUser> {
    if (this.User) {
      return of(this.User);
    }
    return this.http.get<IUser>(`${this.constants.api}users/currentUser`)
      .pipe(map((user: IUser) => {
        this.setCurrentUser(user);
        return user;
      }));
  }

  setCurrentUser(user: IUser): void {
    this.User = user;
  }

  createUser(user: any): any {
    return this.http.post<any>(`${this.constants.api}users`, user)
      .pipe(map(_ => {
        alert('пользователь успешно создан');
      }));
  }
}
