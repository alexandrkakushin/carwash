
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../datasource/static.datasource";

@Injectable()
export class BuildingsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, BuildingsRepository.name);
  }
}
