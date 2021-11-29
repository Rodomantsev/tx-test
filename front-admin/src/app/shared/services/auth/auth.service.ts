import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
// import { CONSTANTS } from "../../admin/core/constants/constants";
import { Router } from '@angular/router';
import * as moment from "moment";
import { UsersService } from "../user/users.service";
import { LocalStorageEnum } from "../../../../../../front-public/src/app/models/models";

interface User {
  id: number;
  email: string;
  password: string;
}
interface Token {
  access_token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UsersService) {
   this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser        = this.currentUserSubject.asObservable();
  }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

  login(email: string, password: string ): any {
    return this.http.post<Token>(`http://localhost:3000/auth/login`, {email, password})
      .pipe(map((authResponse: Token) => {
        const user  = authResponse.user;
        localStorage.setItem(LocalStorageEnum.currentUser, JSON.stringify(authResponse.user));
        this.currentUserSubject.next(user);
        this.setSession(authResponse);
        return user;
      }))
  }


  public logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    // this.router.navigate(['/']);
    window.location.href = 'http://localhost:4200'
  }

  public delete(email: string) {
      return this.http.delete(`http://localhost:3000/auth/login`, {params:{email}})
  }
  private setSession(authResult): void {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
  }

  public isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  public getExpiration(): moment.Moment {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    console.log('isBefore', )
    console.log('isAfter', moment(expiresAt).isAfter(Date.now()))
    return moment(expiresAt);
  }
}
