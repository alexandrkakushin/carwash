
import {Component} from "@angular/core";
import {AbstractCatalogComponent} from "../catalog.abstract";
import {StagesRepository} from "../../../model/repository/stages.repository";
import {SelectItem} from "primeng/api";
import {MaterialsRepository} from "../../../model/repository/materials.repository";
import {ServicesRepository} from "../../../model/repository/services.repository";
import {MechanismsRepository} from "../../../model/repository/mechanisms.repository";

@Component({
  selector: "processing-stages",
  moduleId: module.id,
  templateUrl: "../list.component.html"
})

export class StagesCatalogComponent extends AbstractCatalogComponent {

  materials: SelectItem[];
  services: SelectItem[];
  mechanisms: SelectItem[];

  constructor(repository: StagesRepository,
              private repositoryMaterials: MaterialsRepository,
              private repositoryServices: ServicesRepository,
              private repositoryMechanisms: MechanismsRepository
  ) {
    super(repository, "Этапы");

    this.materials = this.repositoryMaterials.items().map(
      (item, index) => ({label: item.name, value: item})
    );

    this.services = this.repositoryServices.items().map(
      (item, index) => ({label: item.name, value: item})
    );

    this.mechanisms = this.repositoryMechanisms.items().map(
      (item, index) => ({label: item.name, value: item})
    );
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "comment", header: "Комментарий"},
      {field: "service", header: "Работа"},
      {field: "material", header: "Материал"},
      {field: "mechanism", header: "Механизм"}
    ];
  }

}
