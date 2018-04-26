
import {Repository} from "./repository.interface";
import {StaticDataSource} from "../datasource/static.datasource";
import {Observable} from "rxjs/Observable";
import {StagesRepository} from "./stages.repository";

export class CommonRepository implements Repository {

  private _items: any[] = [];
  private maxId: number = 0;

  constructor(private dataSource: StaticDataSource, repository) {
    let items: Observable<any[]>;

    if (repository == 'StagesRepository') {
      items = this.dataSource.getStages();

    } else if (repository == 'CitiesRepository') {
      items = this.dataSource.getCities();

    } else if (repository == 'ContractorsRepository') {
      items = this.dataSource.getContractors();

    } else if (repository == 'GroupsContractorRepository') {
      items = this.dataSource.getGroupsContractor();

    } else if (repository == 'MaterialsRepository') {
      items = this.dataSource.getMaterials();

    } else if (repository == 'MechanismsRepository') {
      items = this.dataSource.getMechanisms();

    } else if (repository == 'SectionsRepository') {
      items = this.dataSource.getSections();

    } else if (repository == 'ServicesRepository') {
      items = this.dataSource.getServices();

    } else if (repository == 'StagesRepository') {
      items = this.dataSource.getStages();

    } else if (repository == 'UnitsMeasureRepository') {
      items = this.dataSource.getUnitsMeasure();

    } else if (repository == 'TargetsRepository') {
      items = this.dataSource.getTargets();

    } else if (repository == 'BuildingsRepository') {
      items = this.dataSource.getBuildings();
    }


    items.subscribe(
      data => {
        this._items = data;
        // todo: получать максимальный индекс
        this.maxId = this._items.length;
      }
    )
  }

  items(): any[] {
    return this._items;
  }

  remove(element: any): boolean {
    let index = this._items.findIndex(line => line.id == element.id);
    this._items.splice(index, 1);

    return true;
  }

  add(element: any): boolean {
    this.maxId++;
    element.id = this.maxId;
    this._items.push(element);
    return true;
  }

  edit(element: any): boolean {
    let index = this._items.findIndex(line => line.id == element.id);
    this._items[index] = element;
    return true;
  }
}
