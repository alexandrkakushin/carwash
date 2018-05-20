
import {Component} from "@angular/core";
import {CatalogComponentCommon} from "../catalog.component";
import {UnitsMeasureRepository} from "../../../model/repository/unitsMeasure.repository";
import {UnitMeasure} from "../../../model/unitMeasure.model";

@Component({
  selector: "catalog-groupscontractor",
  moduleId: module.id,
  templateUrl: "../list.component.html"
})

export class UnitsCatalogComponent extends CatalogComponentCommon {

  constructor(repository: UnitsMeasureRepository) {
    super(repository, "Единицы измерения");
    super.setPrototype(new UnitMeasure());
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "comment", header: "Комментарий"}
    ];
  }
}
