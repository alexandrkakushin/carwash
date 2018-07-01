
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs/Observable";
import {Price} from "../entity/price.model";
import {Nomenclature} from "../entity/catalogs/nomenclature.model";

@Injectable()
export class PricesDatasource {

  private apiUrl = environment.backend + '/api/prices';

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  items(nomenclature: Nomenclature): Observable<Price[]> {
    return this.httpClient
      .get<Price[]>(
        this.apiUrl + '/nomenclature/' + nomenclature.id,
        { headers: this.authService.getAuthorizationHeader() }
      );
  }

  item(id: number): Observable<Price> {
    return this.httpClient
      .get<Price> (
        this.apiUrl + '/' + id,
        { headers: this.authService.getAuthorizationHeader() }
      )
  }

  deletePrice(price: Price): Observable<any> {
    return this.httpClient
      .delete(
        this.apiUrl + '/' + price.id,
        {headers: this.authService.getAuthorizationHeader() }
      );
  }

  addPrice(price: Price): Observable<any> {
    let headers = this.authService.getAuthorizationHeader()
      .append("Content-Type", "application/json");

    return this.httpClient
      .post(
        this.apiUrl, price, {headers: headers});
  }

  editPrice(price: Price): Observable<any> {
    let headers = this.authService.getAuthorizationHeader()
      .append("Content-Type", "application/json");

    return this.httpClient
      .put(
        this.apiUrl, price, {headers: headers});
  }
}
