
import {Component} from "@angular/core";
import {MechanismsRepository} from "../../../model/repository/mechanisms.repository";
import {Nomenclature} from "../../../model/nomenclature.model";
import { CatalogComponentCommon } from "../catalog.component";
import {SelectItem} from "primeng/api";
import {UnitsMeasureRepository} from "../../../model/repository/unitsMeasure.repository";
import {UnitMeasure} from "../../../model/unitMeasure.model";

@Component({
  selector: "catalog-mechanisms",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class MechanismsCatalogComponent extends CatalogComponentCommon {

  units: SelectItem[];

  constructor(repository: MechanismsRepository,
              private repositoryUnits: UnitsMeasureRepository) {
    super(repository, "Механизмы");
    super.setPrototype(new Nomenclature(null, null, null, null, 'MECHANISM'));
  }

  initComponent(): void {
    this.repositoryUnits.getItems()
      .subscribe(
        (value) => {
          this.units = value.map((item, index) => ({label: UnitMeasure.assign(item).toString(), value: UnitMeasure.assign(item)}))
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
