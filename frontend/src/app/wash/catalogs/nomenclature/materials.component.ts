
import {Component} from "@angular/core";
import {MaterialsRepository} from "../../../model/repository/materials.repository";
import { CatalogComponentCommon } from "../catalog.component";
import {SelectItem} from "primeng/api";
import {UnitsMeasureRepository} from "../../../model/repository/unitsMeasure.repository";
import {Nomenclature} from "../../../model/nomenclature.model";
import {UnitMeasure} from "../../../model/unitMeasure.model";

@Component({
  selector: "catalog-materials",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class MaterialsCatalogComponent extends CatalogComponentCommon {

  units: SelectItem[] = [];

  constructor(repository: MaterialsRepository,
              private repositoryUnits: UnitsMeasureRepository) {
    super(repository, "Материалы");
    super.setPrototype(new Nomenclature(null, null, null, null, 'MATERIAL'));
  }

  initComponent(): void {
    let unit = null;
    this.repositoryUnits.getItems()
      .subscribe(
        (data) => {
          data.forEach(
            (item) => {
              unit = UnitMeasure.assign(item);
              this.units.push({label: unit, value: item.id})}
          );
        }
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
