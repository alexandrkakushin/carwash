
import {Component} from "@angular/core";
import {CitiesRepository} from "../../../model/repository/cities.repository";
import {CatalogComponentCommon} from "../catalog.component";
import {GroupsContractorRepository} from "../../../model/repository/groupsContractor.repository";
import {GroupContractor} from "../../../model/groupContractor.model";

@Component({
  selector: "catalog-groupscontractor",
  moduleId: module.id,
  templateUrl: "../list.component.html"
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
