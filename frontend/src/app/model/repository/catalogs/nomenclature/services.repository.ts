
import {Injectable} from "@angular/core";
import {StaticDataSource} from "../../../datasource/static.datasource";
import {CommonRepository} from "../common.repository";
import {Nomenclature} from "../../../entity/catalogs/nomenclature.model";

@Injectable()
export class ServicesRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "ServicesRepository");
  }

  assign(element: any): Nomenclature {
    return Nomenclature.assign(element);
  }
}
