
import {Component} from "@angular/core";
import {ContractorsRepository} from "../../../model/repository/contractors.repository";
import {Contractor} from "../../../model/contractor.model";
import {CatalogComponentCommon} from "../catalog.component";
import {SelectItem} from 'primeng/api';
import {CitiesRepository} from "../../../model/repository/cities.repository";
import {GroupsContractorRepository} from "../../../model/repository/groupsContractor.repository";
import {City} from "../../../model/city.model";
import {GroupContractor} from "../../../model/groupContractor.model";

@Component({
  selector: "catalog-contractors",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class ContractorsCatalogComponent extends CatalogComponentCommon {

  groups: SelectItem[];
  cities: SelectItem[];

  constructor(repository: ContractorsRepository,
              private repositoryCities: CitiesRepository,
              private repositoryGroups: GroupsContractorRepository) {
    super(repository, "Контрагенты");
    super.setPrototype(new Contractor());
  }

  initComponent(): void {
    this.repositoryCities.getItems()
      .subscribe(
        (data) => {
          this.cities = data.map(
            (item, index) => ({label: item.name, value: City.assign(item)})
          );
        }
      );

    this.repositoryGroups.getItems()
      .subscribe(
        (data) => {
          this.groups = data.map(
            (item, index) => ({label: item.name, value: GroupContractor.assign(item)})
          );
        }
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
