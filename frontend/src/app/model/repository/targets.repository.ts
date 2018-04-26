
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../datasource/static.datasource";

@Injectable()
export class TargetsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, TargetsRepository.name);
  }
}
