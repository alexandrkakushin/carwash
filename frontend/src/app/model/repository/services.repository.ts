
import {Injectable} from "@angular/core";
import {StaticDataSource} from "../datasource/static.datasource";
import {CommonRepository} from "./common.repository";

@Injectable()
export class ServicesRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, ServicesRepository.name);
  }
}
