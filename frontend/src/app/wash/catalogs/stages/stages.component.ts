
import {Component} from "@angular/core";
import {CatalogComponentCommon} from "../catalog.component";
import {StagesRepository} from "../../../model/repository/stages.repository";
import {SelectItem} from "primeng/api";
import {MaterialsRepository} from "../../../model/repository/materials.repository";
import {ServicesRepository} from "../../../model/repository/services.repository";
import {MechanismsRepository} from "../../../model/repository/mechanisms.repository";
import {Stage} from "../../../model/stage.model";
import {Nomenclature} from "../../../model/nomenclature.model";

@Component({
  selector: "processing-stages",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class StagesCatalogComponent extends CatalogComponentCommon {

  materials: SelectItem[];
  services: SelectItem[];
  mechanisms: SelectItem[];

  constructor(repository: StagesRepository,
              private repositoryMaterials: MaterialsRepository,
              private repositoryServices: ServicesRepository,
              private repositoryMechanisms: MechanismsRepository
  ) {
    super(repository, "Этапы");
    super.setPrototype(new Stage());
  }

  initComponent(): void {
    this.repositoryMaterials.getItems()
      .subscribe(
        (data) => {
          this.materials = data.map(
            (item, index) => ({label: Nomenclature.assign(item).toString(), value: item.id})
          );
        }
      );

    this.repositoryServices.getItems()
      .subscribe(
        (data) => {
          this.services = data.map(
            (item, index) => ({label: Nomenclature.assign(item).toString(), value: item.id})
          );
        }
      );

    this.repositoryMechanisms.getItems()
      .subscribe(
        (data) => {
          this.mechanisms = data.map(
            (item, index) => ({label: Nomenclature.assign(item).toString(), value: item.id})
          );
        }
      );
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "service", header: "Работа"},
      {field: "material", header: "Материал"},
      {field: "mechanism", header: "Механизм"},
      {field: "comment", header: "Комментарий"}
    ];
  }

}
