import {StaticDataSource} from "../datasource/static.datasource";
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";

@Injectable()
export class UnitsMeasureRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, UnitsMeasureRepository.name);
  }
}
