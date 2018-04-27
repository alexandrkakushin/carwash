
import {Repository} from "./repository.interface";
import {StaticDataSource} from "../datasource/static.datasource";
import {Observable} from "rxjs/Observable";
import {StagesRepository} from "./stages.repository";

export class CommonRepository implements Repository {

  private _items: any[] = [];
  private maxId: number = 0;
  private nameRepository: string;

  constructor(private dataSource: StaticDataSource, repository) {
    this.nameRepository = repository;

    this.refresh();
  }

  refresh(): boolean {

    let items: Observable<any[]>;

    if (this.nameRepository == 'StagesRepository') {
      items = this.dataSource.getStages();

    } else if (this.nameRepository == 'CitiesRepository') {
      items = this.dataSource.items(this.nameRepository);

    } else if (this.nameRepository == 'ContractorsRepository') {
      items = this.dataSource.getContractors();

    } else if (this.nameRepository == 'GroupsContractorRepository') {
      items = this.dataSource.getGroupsContractor();

    } else if (this.nameRepository == 'MaterialsRepository') {
      items = this.dataSource.getMaterials();

    } else if (this.nameRepository == 'MechanismsRepository') {
      items = this.dataSource.getMechanisms();

    } else if (this.nameRepository == 'SectionsRepository') {
      items = this.dataSource.getSections();

    } else if (this.nameRepository == 'ServicesRepository') {
      items = this.dataSource.getServices();

    } else if (this.nameRepository == 'StagesRepository') {
      items = this.dataSource.getStages();

    } else if (this.nameRepository == 'UnitsMeasureRepository') {
      items = this.dataSource.items(this.nameRepository);

    } else if (this.nameRepository == 'TargetsRepository') {
      items = this.dataSource.getTargets();

    } else if (this.nameRepository == 'BuildingsRepository') {
      items = this.dataSource.getBuildings();
    }

    items.subscribe(
      data => {
        this._items = data;
        // todo: получать максимальный индекс
        this.maxId = this._items.length;
      }
    )

    return true;
  }


  items(): any[] {
    return this._items;
  }

  remove(element: any): boolean {

    this.dataSource.deleteElement(element, this.nameRepository);

    let index = this._items.findIndex(line => line.id == element.id);
    this._items.splice(index, 1);

    return true;
  }

  add(element: any): boolean {
    this.dataSource.addElement(element, this.nameRepository);

    this.refresh();
    // this.maxId++;
    // element.id = this.maxId;
    // this._items.push(element);
    return true;
  }

  edit(element: any): boolean {
    let result = this.dataSource.editElement(element, this.nameRepository);
    if (result) {
      let index = this._items.findIndex(line => line.id == element.id);
      this._items[index] = element;
    }

    return result;
  }
}
