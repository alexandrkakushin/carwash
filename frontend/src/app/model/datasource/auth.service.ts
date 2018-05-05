import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppConstant} from "../../app.contants";
import {Message} from "primeng/api";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class AuthService {

  authenticated = false;
  private basic: String = null;

  private msgs: Message[] = [];

  constructor(private http: HttpClient) {}

  public authenticate(credentials, callback) {
    this.basic = btoa(credentials.username + ':' + credentials.password);
    this.msgs = [];

    this.http
      .get(AppConstant.getBackendUrl() + '/auth/user', { headers: this.getAuthorizationHeader() })
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

  getMessages(): Observable<Message[]> {
    return Observable.from([this.msgs]);
  }
}
