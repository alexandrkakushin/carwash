
import {Component} from "@angular/core";
import {AbstractCatalogComponent} from "../catalog.abstract";
import {UnitsMeasureRepository} from "../../../model/repository/unitsMeasure.repository";

@Component({
  selector: "catalog-units",
  moduleId: module.id,
  templateUrl: "../list.component.html"
})

export class UnitsCatalogComponent extends AbstractCatalogComponent {

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
