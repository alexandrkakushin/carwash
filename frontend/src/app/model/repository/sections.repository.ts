import {StaticDataSource} from "../datasource/static.datasource";
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";

@Injectable()
export class SectionsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, SectionsRepository.name);
  }
}
