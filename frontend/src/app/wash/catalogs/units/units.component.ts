
import {Component} from "@angular/core";
import {CatalogComponentCommon} from "../component.common";
import {UnitsMeasureRepository} from "../../../model/repository/unitsMeasure.repository";

@Component({
  selector: "catalog-groupscontractor",
  moduleId: module.id,
  templateUrl: "../list.component.html"
})

export class UnitsCatalogComponent extends CatalogComponentCommon {

  constructor(repository: UnitsMeasureRepository) {
    super(repository, "Единицы измерения");
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "comment", header: "Комментарий"}
    ];
  }
}
