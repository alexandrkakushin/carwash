
import {Component} from "@angular/core";
import {ServicesRepository} from "../../../model/repository/services.repository";
import {Nomenclature} from "../../../model/nomenclature.model";
import { CatalogComponentCommon } from "../catalog.component";
import {SelectItem} from "primeng/api";
import {UnitsMeasureRepository} from "../../../model/repository/unitsMeasure.repository";

@Component({
  selector: "catalog-services",
  moduleId: module.id,
  templateUrl: "../list.component.html"
})

export class ServicesCatalogComponent extends CatalogComponentCommon {

  units: SelectItem[];

  constructor(repository: ServicesRepository,
              private repositoryUnits: UnitsMeasureRepository) {
    super(repository, "Работы");
    super.setPrototype(new Nomenclature());
  }

  initComponent(): void {
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
