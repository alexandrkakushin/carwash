
import {from as observableFrom, Observable, Subscription} from 'rxjs';

import {Repository} from "./repository.interface";
import {StaticDataSource} from "../../datasource/static.datasource";
import "rxjs/add/observable/from";
import "rxjs/add/operator/toPromise";
import {CatalogCommon} from "../../entity/catalogs/catalog.model";
import {Message} from "primeng/api";

export class CommonRepository implements Repository {

  private _items: CatalogCommon[] = [];
  private nameRepository: string;

  private msgs: Message[] = [];

  constructor(private dataSource: StaticDataSource, repository) {
    this.nameRepository = repository;
  }

  update(): Observable<CatalogCommon[]> {
    let getItems: Observable<CatalogCommon[]> = this.getItems();
    getItems
      .subscribe(
        data => {
          this.clear();
          data.forEach(
            (item) => {
              this.items().push(this.assign(item))
            }
          );
        }
      );
    return getItems;
  }

  getMessages(): Observable<Message[]> {
    return observableFrom([this.msgs]);
  }

  assign(element: any): CatalogCommon {
    return null;
  }

  items(): CatalogCommon[] {
    return this._items;
  }

  push(element: CatalogCommon) {
    this._items.push(element);
  }

  clear(): void {
    this._items = [];
  }

  // CRUD

  getItems(): Observable<CatalogCommon[]> {
    return this.dataSource.items(this.nameRepository);
  }

  getItem(id: number): Observable<CatalogCommon> {
    return this.dataSource.item(id, this.nameRepository);
  }

  remove(element: CatalogCommon): void {
    this.msgs = [];
    this.dataSource.deleteElement(element, this.nameRepository)
      .subscribe(
        value => {
          this.msgs.push({severity: 'success', summary: "Удаление", detail: element.name});
          let index = this._items.findIndex(line => line.id == element.id);
          this._items.splice(index, 1);
        }, error => {
          this.msgs.push({severity: 'error', summary: "Удаление", detail: element.name});
        }
      );
  }

  add(element: CatalogCommon): void {
    this.msgs = [];
    this.dataSource.addElement(element, this.nameRepository)
      .subscribe(
        value => {
          if (value != null) {
            this.getItem(value.id).subscribe(
              loadElement => {
                this.msgs.push({severity: 'success', summary: "Создание", detail: element.name});
                this._items.push(this.assign(loadElement));
              },
              error => {
                this.msgs.push({severity: 'error', summary: "Создание", detail: element.name});
              }
            );
          }
        }, error => {
          this.msgs.push({severity: 'error', summary: "Создание", detail: element.name});
        }
      );
  }

  edit(element: CatalogCommon): void {
    this.msgs = [];
    this.dataSource.editElement(element, this.nameRepository)
      .subscribe(
        value => {
          this.getItem(value.id).subscribe(
            (loadElement) => {
              this.msgs.push({severity: 'success', summary: "Изменение", detail: loadElement.name});
              let index = this._items.findIndex(line => line.id == loadElement.id);
              Object.assign(this._items[index], this.assign(loadElement));
            }
          );
        }, error => {
          this.msgs.push({severity: 'error', summary: "Изменение", detail: element.name});
        }
      );
  }
}
