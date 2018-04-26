
import {Injectable} from "@angular/core";
import {StaticDataSource} from "../datasource/static.datasource";
import {CommonRepository} from "./common.repository";

@Injectable()
export class MechanismsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, MechanismsRepository.name);
  }
}
