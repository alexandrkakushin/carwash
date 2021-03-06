
import {Injectable} from "@angular/core";
import {StaticDataSource} from "../../../datasource/static.datasource";
import {CommonRepository} from "../common.repository";
import {UnitsMeasureRepository} from "../unitsMeasure.repository";
import {Nomenclature} from "../../../entity/catalogs/nomenclature.model";
import {CatalogCommon} from "../../../entity/catalogs/catalog.model";
import {UnitMeasure} from "../../../entity/catalogs/unitMeasure.model";

@Injectable()
export class MechanismsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "MechanismsRepository");
  }

  assign(element: any): Nomenclature {
    return Nomenclature.assign(element);
  }
}
