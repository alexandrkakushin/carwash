
import {Injectable} from "@angular/core";
import {CommonRepository} from "../common.repository";
import {StaticDataSource} from "../../../datasource/static.datasource";
import {Nomenclature} from "../../../entity/catalogs/nomenclature.model";

@Injectable()
export class NomenclaturesRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "NomenclaturesRepository");
  }

  assign(element: any): Nomenclature {
    return Nomenclature.assign(element);
  }
}
