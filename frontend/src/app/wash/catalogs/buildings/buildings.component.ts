
import {Component} from "@angular/core";
import {AbstractCatalogComponent} from "../catalog.abstract";
import {BuildingsRepository} from "../../../model/repository/buildings.repository";
import {SelectItem} from "primeng/api";
import {SectionsRepository} from "../../../model/repository/sections.repository";

@Component({
  selector: "catalog-buildings",
  moduleId: module.id,
  templateUrl: "../list.component.html"
})

export class BuildingsCatalogComponent extends AbstractCatalogComponent {

  sections: SelectItem[];

  constructor(repository: BuildingsRepository,
              private repositorySections: SectionsRepository) {

    super(repository, "Типы сооружений");
    this.sections = repositorySections.items().map(
      (item, index) => ({label: item.name, value: item})
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