import {StaticDataSource} from "../datasource/static.datasource";
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {UnitMeasure} from "../unitMeasure.model";

@Injectable()
export class UnitsMeasureRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "UnitsMeasureRepository");
  }

  assign(element: any): UnitMeasure {
    return UnitMeasure.assign(element);
  }
}
