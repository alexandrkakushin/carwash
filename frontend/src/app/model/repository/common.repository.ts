
import {Repository} from "./repository.interface";
import {StaticDataSource} from "../datasource/static.datasource";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import {CatalogCommon} from "../catalog.model";
import {Message} from "primeng/api";

export class CommonRepository implements Repository {

  private _items: CatalogCommon[] = [];
  private nameRepository: string;

  private msgs: Message[] = [];

  constructor(private dataSource: StaticDataSource, repository) {
    this.nameRepository = repository;
    this.refresh();
  }

  init() {}

  getDataSource(): StaticDataSource {
    return this.dataSource;
  }

  getMessages(): Observable<Message[]> {
    return Observable.from([this.msgs]);
  }


  createElement(): CatalogCommon {
    return new CatalogCommon();
  }

  findByElement(element: CatalogCommon) {
    if (element == null) {
      return null;
    }
    return this._items.find(line => line.id == element.id);
  }


  // CRUD

  refresh(): void {
    this._items.splice(0, this._items.length);
    this.init();
  }

  items(): CatalogCommon[] {
    return this._items;
  }

  remove(element: CatalogCommon): void {
    let response = this.dataSource.deleteElement(element, this.nameRepository);
    this.msgs = [];
    response.subscribe(
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
    let response = this.dataSource.addElement(element, this.nameRepository);
    this.msgs = [];
    response.subscribe(
        value => {
          if (value != null) {
            element.id = value.id;
            this._items.push(element);
            this.msgs.push({severity: 'success', summary: "Создание", detail: element.name});
          } else {
            this.msgs.push({severity: 'error', summary: "Создание", detail: element.name});
          }
        }, error => {
          this.msgs.push({severity: 'error', summary: "Создание", detail: element.name});
        }
      );
  }

  edit(element: CatalogCommon): void {
    let response = this.dataSource.editElement(element, this.nameRepository);
    this.msgs = [];
    response.subscribe(
        value => {
          this.msgs.push({severity: 'success', summary: "Изменение", detail: element.name});
          let index = this._items.findIndex(line => line.id == element.id);
          Object.assign(this._items[index], element);
        }, error => {
          this.msgs.push({severity: 'error', summary: "Изменение", detail: element.name});
        }
      );
  }

}
