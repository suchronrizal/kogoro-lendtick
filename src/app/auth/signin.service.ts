import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

import { MainService } from '../library/services/main.service';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  urlAuth = this.endPoint['auth'] + '/b2c/authorization/internal/login/';
  urlRefreshToken =
    this.endPoint['auth'] + '/v2/b2c/authorization/refresh-token';

  user: Observable<User>;
  getUsers: any[] = [];
  private userSubject: BehaviorSubject<User>;
  private refreshTokenTimeout;

  constructor(private http: HttpClient, private endPoint: MainService) {
    this.userSubject = new BehaviorSubject<User>(null);
    this.user = this.userSubject.asObservable();
    const getCurrentUsers =
      (localStorage.getItem('usersKey') &&
        JSON.parse(localStorage.getItem('usersKey'))) ||
      [];
    this.getUsers = [getCurrentUsers];
    if (!this.getUsers.length) {
      this.getUsers.push({ refreshTokens: [] });
    }
  }
  public get userValue(): User {
    return this.userSubject.value;
  }

  signin(params) {
    let token = [];
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    let param = JSON.stringify(params);
    return this.http.post<any>(this.urlAuth, param, options).pipe(
      map((user) => {
        this.userSubject.next(user);
        token.push(this.generateRefreshToken());
        user.refreshTokens = token;
        localStorage.setItem('usersKey', JSON.stringify([user]));
        this.startRefreshTokenTimer();
        return user;
      })
    );
  }

  refreshToken() {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) return this.unauthorized();

    const user = _.find(this.getUsers[0], (x) =>
      _.includes(x.refreshTokens, refreshToken)
    );
    if (!user) return this.unauthorized();

    this.userSubject.next(user);
    // replace old refresh token with a new one and save
    user.refreshTokens = user.refreshTokens.filter((x) => x !== refreshToken);
    user.refreshTokens.push(this.generateRefreshToken());
    this.startRefreshTokenTimer();
    localStorage.setItem('usersKey', JSON.stringify([user]));
    return user;
  }

  unauthorized() {
    return throwError({ status: 401, error: { message: 'Unauthorized' } });
  }

  private startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(this.userValue.token.split('.')[1]));

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const dateTimeout = expires.getTime() - Date.now() - 60 * 1000;

    this.refreshTokenTimeout = setTimeout(
      () => this.refreshToken().subscribe(),
      2147483647
      // dateTimeout
    );
  }

  generateRefreshToken() {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    const token = new Date().getTime().toString();
    this.http.get<any>(this.urlRefreshToken, options).subscribe((res) => {
      this.userValue.token = res.Data.token;
      const jwtToken = JSON.parse(atob(this.userValue.token.split('.')[1]));

      // set a timeout to refresh the token a minute before it expires
      const expires = new Date(jwtToken.exp * 1000);
      document.cookie = `fakeRefreshToken=${token}; expires=${expires}; path=/`;
    });
    return token;
  }

  getRefreshToken() {
    // get refresh token from cookie
    return (
      document.cookie.split(';').find((x) => x.includes('fakeRefreshToken')) ||
      '='
    ).split('=')[1];
  }
}
