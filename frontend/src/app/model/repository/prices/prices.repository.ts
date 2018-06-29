
import {Injectable} from "@angular/core";
import {PricesDatasource} from "../../datasource/prices.datasource";
import {Observable} from "rxjs/Observable";
import {Price} from "../../entity/price.model";
import {Nomenclature} from "../../entity/catalogs/nomenclature.model";
import {Message} from "primeng/api";

@Injectable()
export class PricesRepository {

  private _items: Price[] = [];
  private msgs: Message[] = [];

  constructor(private dataSource: PricesDatasource) {}

  // CRUD

  getItems(nomenclature: Nomenclature): Observable<Price[]> {
    return this.dataSource.items(nomenclature);
  }

  clear(): void {
    this._items = [];
  }

  items(): Price[] {
    return this._items;
  }

  update(nomenclature: Nomenclature) {
    this.getItems(nomenclature)
      .subscribe(
        data => {
          this.clear();
          data.forEach(
            (item) => {
              this.items().push(Price.assign(item))
            }
          );
        }
      );
  }
}
