
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../../datasource/static.datasource";
import {Building} from "../../entity/catalogs/building.model";

@Injectable()
export class BuildingsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "BuildingsRepository");
  }

  assign(element: any): Building {
    return Building.assign(element);
  }
}
