
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../datasource/static.datasource";
import {BuildingsRepository} from "./buildings.repository";
import {CitiesRepository} from "./cities.repository";
import {Target} from "../target.model";
import {CatalogCommon} from "../catalog.model";
import {City} from "../city.model";
import {Building} from "../building.model";

@Injectable()
export class TargetsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "TargetsRepository");
  }

  assign(element: any): Target {
    return Target.assign(element);
  }
}
