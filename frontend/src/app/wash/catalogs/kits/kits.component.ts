
import {Component} from "@angular/core";
import {CatalogComponentCommon} from "../catalog.component";
import {KitsRepository} from "../../../model/repository/kits.repository";
import {Kit} from "../../../model/kit.model";

@Component({
  selector: "catalog-kits",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class KitsCatalogComponent extends CatalogComponentCommon {

  constructor(repository: KitsRepository) {
    super(repository, "Комплекты");
    super.setPrototype(new Kit());
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "comment", header: "Комментарий"}
    ];
  }
}
