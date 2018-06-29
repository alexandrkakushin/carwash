import {StaticDataSource} from "../../datasource/static.datasource";
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {Section} from "../../entity/catalogs/section.model";
import {StagesRepository} from "./stages.repository";

@Injectable()
export class SectionsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "SectionsRepository");
  }

  assign(element: any): Section {
    return Section.assign(element);
  }
}
