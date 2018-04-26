
import {Component} from "@angular/core";
import {MechanismsRepository} from "../../../model/repository/mechanisms.repository";
import {Nomenclature} from "../../../model/nomenclature.model";
import { AbstractCatalogComponent } from "../catalog.abstract";
import {SelectItem} from "primeng/api";
import {UnitsMeasureRepository} from "../../../model/repository/unitsMeasure.repository";

@Component({
  selector: "catalog-mechanisms",
  moduleId: module.id,
  templateUrl: "../list.component.html"
})

export class MechanismsCatalogComponent extends AbstractCatalogComponent {

  units: SelectItem[];

  constructor(repository: MechanismsRepository,
              private repositoryUnits: UnitsMeasureRepository) {
    super(repository, "Механизмы");

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