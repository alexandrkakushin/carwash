
import {Component} from "@angular/core";
import {CatalogComponentCommon} from "../catalog.component";
import {KitsRepository} from "../../../model/repository/catalogs/kits.repository";
import {Kit} from "../../../model/entity/catalogs/kit.model";
import {SelectItem} from "primeng/api";
import {MaterialsRepository} from "../../../model/repository/catalogs/nomenclature/materials.repository";
import {Nomenclature} from "../../../model/entity/catalogs/nomenclature.model";

@Component({
  selector: "catalog-kits",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class KitsCatalogComponent extends CatalogComponentCommon {

  materials: SelectItem[];

  constructor(
    repository: KitsRepository,
    private repositoryMaterials: MaterialsRepository)
  {
    super(repository, "Комплекты");
    super.setPrototype(new Kit());
  }

  initComponent(): void {
    this.repositoryMaterials.getItems()
      .subscribe(
        (value) => {
          this.materials = value.map(
            (item, index) => ({label: Nomenclature.assign(item).toString(), value: Nomenclature.assign(item)})
          );
        }
      )
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "comment", header: "Комментарий"}
    ];
  }
}
