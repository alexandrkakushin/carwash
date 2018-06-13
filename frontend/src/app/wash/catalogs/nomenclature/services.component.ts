
import {Component} from "@angular/core";
import {ServicesRepository} from "../../../model/repository/services.repository";
import {Nomenclature} from "../../../model/nomenclature.model";
import { CatalogComponentCommon } from "../catalog.component";
import {SelectItem} from "primeng/api";
import {UnitsMeasureRepository} from "../../../model/repository/unitsMeasure.repository";
import {UnitMeasure} from "../../../model/unitMeasure.model";

@Component({
  selector: "catalog-services",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class ServicesCatalogComponent extends CatalogComponentCommon {

  units: SelectItem[];

  constructor(repository: ServicesRepository,
              private repositoryUnits: UnitsMeasureRepository) {
    super(repository, "Работы");
    super.setPrototype(new Nomenclature(null, null, null, null, 'SERVICE'));
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
