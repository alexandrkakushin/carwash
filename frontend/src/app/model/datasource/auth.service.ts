
import {from as observableFrom, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Message} from "primeng/api";
import "rxjs/add/observable/from";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {

  authenticated = false;
  private basic: String = null;

  private msgs: Message[] = [];

  constructor(
    private http: HttpClient
  ) {}

  public authenticate(credentials, callback) {
    this.basic = btoa(credentials.username + ':' + credentials.password);
    this.msgs = [];

    this.http
      .get(environment.backend + '/auth/user', { headers: this.getAuthorizationHeader() })
        .subscribe(
          value => {
            if (value['name']) {
              this.authenticated = true;
              return callback && callback();
            }
          }, error => {
            this.msgs.push({severity: 'warn', summary: "Авторизация", detail: "Неверные имя пользователя или пароль"});
          }
        );
  }

  getAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders(this.basic ? {'Authorization' : 'Basic ' + this.basic} : {});
  }

  getSystemAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders(
      {'Authorization' : 'Basic '
        + btoa(
            environment.credentials.username + ':' + environment.credentials.password)});
  }

  getMessages(): Observable<Message[]> {
    return observableFrom([this.msgs]);
  }
}
