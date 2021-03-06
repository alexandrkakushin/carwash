
import {Component} from "@angular/core";
import {CatalogComponentCommon} from "../catalog.component";
import {TargetsRepository} from "../../../model/repository/catalogs/targets.repository";
import {CitiesRepository} from "../../../model/repository/catalogs/cities.repository";
import {BuildingsRepository} from "../../../model/repository/catalogs/buildings.repository";
import {SelectItem} from "primeng/api";
import {Target} from "../../../model/entity/catalogs/target.model";
import {City} from "../../../model/entity/catalogs/city.model";
import {Building} from "../../../model/entity/catalogs/building.model";

@Component({
  selector: "catalog-targets",
  moduleId: module.id,
  templateUrl: "../items.component.html",
  providers: [CitiesRepository, BuildingsRepository]
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
    this.repositoryCities.getItems()
      .subscribe(
        (data) => {
          this.cities = data.map(
            (item, index) => ({label: item.name, value: City.assign(item)})
          );
        }
      );

    this.repositoryBuildings.getItems()
      .subscribe(
        (data) => {
          this.buildings = data.map(
            (item, index) => ({label: item.name, value: Building.assign(item, true)})
          );
        }
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
