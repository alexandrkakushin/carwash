
import {Injectable} from "@angular/core";
import {StaticDataSource} from "../../datasource/static.datasource";
import {CommonRepository} from "./common.repository";
import {Stage} from "../../entity/catalogs/stage.model";

@Injectable()
export class StagesRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "StagesRepository");
  }

  assign(element: any): Stage {
    return Stage.assign(element);
  }
}
