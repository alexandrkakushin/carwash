
import {Component, OnInit} from "@angular/core";
import {MaterialsRepository} from "../../../model/repository/materials.repository";
import { CatalogComponentCommon } from "../component.common";
import {SelectItem} from "primeng/api";
import {UnitsMeasureRepository} from "../../../model/repository/unitsMeasure.repository";

@Component({
  selector: "catalog-materials",
  moduleId: module.id,
  templateUrl: "../list.component.html"
})

export class MaterialsCatalogComponent extends CatalogComponentCommon {

  units: SelectItem[];

  constructor(repository: MaterialsRepository,
              private repositoryUnits: UnitsMeasureRepository) {
    super(repository, "Материалы");
    this.units = this.repositoryUnits.items().map(
      (item, index) => ( {label: item.name, value: item} )
    );
  }

  columns(): any[] {
    return [
      {field: "id", header: "ID"},
      {field: "article", header: "Артикул"},
      {field: "name", header: "Наименование"},
      {field: "unit", header: "Ед. изм"},
      {field: "price", header: "Цена"},
      {field: "comment", header: "Комментарий"}
    ];
  }
}
