
import {Component} from "@angular/core";
import {CatalogComponentCommon} from "../catalog.component";
import {TargetsRepository} from "../../../model/repository/targets.repository";
import {CitiesRepository} from "../../../model/repository/cities.repository";
import {BuildingsRepository} from "../../../model/repository/buildings.repository";
import {SelectItem} from "primeng/api";
import {Target} from "../../../model/target.model";

@Component({
  selector: "catalog-targets",
  moduleId: module.id,
  templateUrl: "../list.component.html"
})

export class TargetsCatalogComponent extends CatalogComponentCommon {

  cities: SelectItem[];
  buildings: SelectItem[];

  constructor(repository: TargetsRepository,
              private repositoryCities: CitiesRepository,
              private repositoryBuildings: BuildingsRepository) {
    super(repository, "Объекты");
    super.setPrototype(new Target());
  }

  initComponent(): void {
    this.cities = this.repositoryCities.items().map(
      (item, index) => ({label: item.name, value: item})
    );

    this.buildings = this.repositoryBuildings.items().map(
      (item, index) => ({label: item.name, value: item})
    );
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "city", header: "Город"},
      {field: "building", header: "Тип сооружения"},
      {field: "point", header: "Количество постов"},
      {field: "comment", header: "Комментарий"}
    ];
  }
}
