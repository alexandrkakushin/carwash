
import {Component} from "@angular/core";
import {ContractorsRepository} from "../../../model/repository/contractors.repository";
import {Contractor} from "../../../model/contractor.model";
import {AbstractCatalogComponent} from "../catalog.abstract";
import {SelectItem} from 'primeng/api';
import {CitiesRepository} from "../../../model/repository/cities.repository";
import {GroupsContractorRepository} from "../../../model/repository/groupsContractor.repository";
import {GroupContractor} from "../../../model/groupContractor.model";
import {visitValue} from "@angular/compiler/src/util";

@Component({
  selector: "catalog-contractors",
  moduleId: module.id,
  templateUrl: "../list.component.html"
})

export class ContractorsCatalogComponent extends AbstractCatalogComponent {

  groups: SelectItem[];
  cities: SelectItem[];

  constructor(repository: ContractorsRepository,
              private repositoryCities: CitiesRepository,
              private repositoryGroups: GroupsContractorRepository
  ) {
    super(repository, "Контрагенты");

    this.groups = this.repositoryGroups.items().map(
      (item, index) => ({label: item.name, value: item})
    );

    this.cities = this.repositoryCities.items().map(
      (item, index) => ({label: item.name, value: item})
    );
  }

  columns(): any[] {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "group", header: "Группа"},
      {field: "city", header: "Город"},
      {field: "email", header: "E-mail"},
      {field: "telephone", header: "Телефон"},
      {field: "comment", header: "Комментарий"}
    ];
  }

}
