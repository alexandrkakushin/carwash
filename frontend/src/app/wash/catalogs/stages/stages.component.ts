
import {Component} from "@angular/core";
import {CatalogComponentCommon} from "../catalog.component";
import {StagesRepository} from "../../../model/repository/catalogs/stages.repository";
import {SelectItem} from "primeng/api";
import {ServicesRepository} from "../../../model/repository/catalogs/nomenclature/services.repository";
import {MechanismsRepository} from "../../../model/repository/catalogs/nomenclature/mechanisms.repository";
import {Stage} from "../../../model/entity/catalogs/stage.model";
import {Nomenclature} from "../../../model/entity/catalogs/nomenclature.model";
import {KitsRepository} from "../../../model/repository/catalogs/kits.repository";
import {Kit} from "../../../model/entity/catalogs/kit.model";
import {CatalogCommon} from "../../../model/entity/catalogs/catalog.model";

@Component({
  selector: "processing-stages",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class StagesCatalogComponent extends CatalogComponentCommon {

  kits: SelectItem[];
  services: SelectItem[];
  mechanisms: SelectItem[];

  constructor(repository: StagesRepository,
              private repositoryKits: KitsRepository,
              private repositoryServices: ServicesRepository,
              private repositoryMechanisms: MechanismsRepository
  ) {
    super(repository, "Этапы");
    super.setPrototype(new Stage());
  }

  initComponent(): void {
    this.repositoryKits.getItems()
      .subscribe(
        (data) => {
          this.kits = data.map(
            (item, index) => (
              {label: item.name, value: Kit.assign(item, true)})
          );
          console.log(this.kits);
        }
      );

    this.repositoryServices.getItems()
      .subscribe(
        (data) => {
          this.services = data.map(
            (item, index) => ({label: Nomenclature.assign(item).toString(), value: Nomenclature.assign(item)})
          );
        }
      );

    this.repositoryMechanisms.getItems()
      .subscribe(
        (data) => {
          this.mechanisms = data.map(
            (item, index) => ({label: Nomenclature.assign(item).toString(), value: Nomenclature.assign(item)})
          );
        }
      );
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "volume", header: "Объем"},
      {field: "kit", header: "Комплект"},
      {field: "service", header: "Работа"},
      {field: "mechanism", header: "Механизм"},
      {field: "comment", header: "Комментарий"}
    ];
  }

}
