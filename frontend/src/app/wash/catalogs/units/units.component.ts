
import {Component} from "@angular/core";
import {CatalogComponentCommon} from "../catalog.component";
import {UnitsMeasureRepository} from "../../../model/repository/catalogs/unitsMeasure.repository";
import {UnitMeasure} from "../../../model/entity/catalogs/unitMeasure.model";

@Component({
  selector: "catalog-groupscontractor",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class UnitsCatalogComponent extends CatalogComponentCommon {

  constructor(repository: UnitsMeasureRepository) {
    super(repository, "Единицы измерения");
    super.setPrototype(new UnitMeasure());
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "code", header: "Код ОКЕИ"},
      {field: "name", header: "Наименование"},
      {field: "comment", header: "Комментарий"}
    ];
  }
}
