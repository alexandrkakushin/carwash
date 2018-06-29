
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
        this.apiUrl + '/' + nomenclature.id,
        { headers: this.authService.getSystemAuthorizationHeader() }
      );
  }

  item(id: number): Observable<Price> {
    return null;
  }

  itemLast(nomenclature: Nomenclature): Observable<Price> {
    return null;
  }

  itemByDate(nomenclature: Nomenclature, date: Date): Observable<Price> {
    return null;
  }


  deletePrice(price: Price): Observable<any> {
    return null;
  }

  addPrice(price: Price): Observable<any> {
    return null;
  }

  editPrice(price: Price): Observable<any> {
    return null;
  }
}
