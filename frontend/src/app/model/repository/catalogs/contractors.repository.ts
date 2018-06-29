
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../../datasource/static.datasource";
import {Contractor} from "../../entity/catalogs/contractor.model";

@Injectable()
export class ContractorsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "ContractorsRepository")
  }

  assign(element: any): Contractor {
    return Contractor.assign(element);
  }
}
