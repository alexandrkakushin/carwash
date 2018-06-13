
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AdminService {

  private apiUrl = environment.backend + '/api';

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  public fillOkei(): Observable<any> {
    let headers = this.authService.getSystemAuthorizationHeader()
      .append("Content-Type", "application/json");

    return this.httpClient
      .post(
        this.apiUrl + '/admin/okei/fill', null,  {headers: headers});
  }
}
