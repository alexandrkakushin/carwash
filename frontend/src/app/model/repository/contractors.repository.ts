
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../datasource/static.datasource";
import {Contractor} from "../contractor.model";
import {CitiesRepository} from "./cities.repository";
import {GroupsContractorRepository} from "./groupsContractor.repository";

@Injectable()
export class ContractorsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource,
              private citiesRepository: CitiesRepository,
              private groupsRepository: GroupsContractorRepository
  ) {
   super(dataSource, "ContractorsRepository")
  }

  init() {
    super.getDataSource().items("ContractorsRepository")
      .subscribe(
        data => {
          data.forEach(
            (item) => {
              super.items().push(new Contractor(
                item.id,
                item.name,
                this.citiesRepository.findByElement(item.city),
                this.groupsRepository.findByElement(item.group),
                item.email,
                item.telephone,
                item.comment)
              )
            }
          );
        }
      );
  }

}
