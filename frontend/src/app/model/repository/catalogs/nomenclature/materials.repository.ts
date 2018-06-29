
import {Injectable} from "@angular/core";
import {CommonRepository} from "../common.repository";
import {StaticDataSource} from "../../../datasource/static.datasource";
import {UnitsMeasureRepository} from "../unitsMeasure.repository";
import {Nomenclature} from "../../../entity/catalogs/nomenclature.model";
import {CatalogCommon} from "../../../entity/catalogs/catalog.model";
import {UnitMeasure} from "../../../entity/catalogs/unitMeasure.model";
import {Observable} from "rxjs/Observable";
import {MechanismsRepository} from "./mechanisms.repository";
import {ServicesRepository} from "./services.repository";

@Injectable()
export class MaterialsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "MaterialsRepository");
  }

  assign(element: any): Nomenclature {
    return Nomenclature.assign(element);
  }
}
