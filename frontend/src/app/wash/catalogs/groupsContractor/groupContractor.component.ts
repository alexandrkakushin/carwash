
import {Component} from "@angular/core";
import {CatalogComponentCommon} from "../catalog.component";
import {GroupsContractorRepository} from "../../../model/repository/catalogs/groupsContractor.repository";
import {GroupContractor} from "../../../model/entity/catalogs/groupContractor.model";

@Component({
  selector: "catalog-groupscontractor",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class GroupsContractorCatalogComponent extends CatalogComponentCommon {

  constructor(repository: GroupsContractorRepository) {
    super(repository, "Группы контрагентов");
    super.setPrototype(new GroupContractor());
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "comment", header: "Комментарий"}
    ];
  }
}
