
import {Injectable} from "@angular/core";
import {StaticDataSource} from "../datasource/static.datasource";
import {CommonRepository} from "./common.repository";
import {GroupContractor} from "../groupContractor.model";

@Injectable()
export class GroupsContractorRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "GroupsContractorRepository");
  }

  assign(element: any): GroupContractor {
    return GroupContractor.assign(element);
  }
}
