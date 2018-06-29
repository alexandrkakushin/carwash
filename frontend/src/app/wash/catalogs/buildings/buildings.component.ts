
import {Component} from "@angular/core";
import {CatalogComponentCommon} from "../catalog.component";
import {BuildingsRepository} from "../../../model/repository/catalogs/buildings.repository";
import {SelectItem} from "primeng/api";
import {SectionsRepository} from "../../../model/repository/catalogs/sections.repository";
import {Building} from "../../../model/entity/catalogs/building.model";
import {Section} from "../../../model/entity/catalogs/section.model";

@Component({
  selector: "catalog-buildings",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class BuildingsCatalogComponent extends CatalogComponentCommon {

  sections: SelectItem[];

  constructor(repository: BuildingsRepository,
              private repositorySections: SectionsRepository) {
    super(repository, "Типы сооружений");
    super.setPrototype(new Building());
  }

  initComponent(): void {
    this.repositorySections.getItems()
      .subscribe(
        (data) => {
          this.sections = data.map(
            (item, index) => ({label: item.name, value: Section.assign(item, true)})
          );
        }
      );
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "comment", header: "Комментарий"}
    ];
  }
}
