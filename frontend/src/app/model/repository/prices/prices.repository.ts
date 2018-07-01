
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

  getMessages(): Observable<Message[]> {
    return Observable.from([this.msgs]);
  }

  // CRUD

  getItems(nomenclature: Nomenclature): Observable<Price[]> {
    return this.dataSource.items(nomenclature);
  }

  getItem(id: number): Observable<Price> {
    return this.dataSource.item(id);
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

  remove(element: Price): void {
    this.msgs = [];
    this.dataSource.deletePrice(element)
      .subscribe(
        value => {
          this.msgs.push({severity: 'success', summary: "Удаление", detail: ""});
          let index = this._items.findIndex(line => line.id == element.id);
          this._items.splice(index, 1);
        }, error => {
          this.msgs.push({severity: 'error', summary: "Удаление", detail: "Невозможно удалить цену"});
        }
      );
  }

  add(element: Price): void {
    this.msgs = [];
    this.dataSource.addPrice(element)
      .subscribe(
        value => {
          if (value != null) {
            this.getItem(value.id).subscribe(
              loadElement => {
                this.msgs.push({severity: 'success', summary: "Создание", detail: "Добавлена новая цена"});
                this._items.push(Price.assign(loadElement));
              },
              error => {
                this.msgs.push({severity: 'error', summary: "Создание", detail: "Невозможно добавить новую цену"});
              }
            );
          }
        }, error => {
          this.msgs.push({severity: 'error', summary: "Создание", detail: "Невозможно добавить новую цену"});
        }
      );
  }

  edit(element: Price): void {
    this.msgs = [];
    this.dataSource.editPrice(element)
      .subscribe(
        value => {
          this.getItem(value.id).subscribe(
            (loadElement) => {
              this.msgs.push({severity: 'success', summary: "Изменение", detail: "Успешно"});
              let index = this._items.findIndex(line => line.id == loadElement.id);
              Object.assign(this._items[index], Price.assign(loadElement));
            }
          );
        }, error => {
          this.msgs.push({severity: 'error', summary: "Изменение", detail: "Невозможно изменить цену"});
        }
      );
  }
}
