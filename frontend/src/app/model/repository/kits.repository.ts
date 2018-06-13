
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../datasource/static.datasource";
import {Kit} from "../kit.model";

@Injectable()
export class KitsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "KitsRepository");
  }

  assign(element: any): Kit {
    return Kit.assign(element);
  }
}
