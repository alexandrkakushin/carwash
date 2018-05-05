
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../datasource/static.datasource";
import {UnitsMeasureRepository} from "./unitsMeasure.repository";
import {Nomenclature} from "../nomenclature.model";

@Injectable()
export class MaterialsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource, private unitsRepository: UnitsMeasureRepository) {
    super(dataSource, "MaterialsRepository");
  }

  init() {
    super.getDataSource().items("MaterialsRepository")
      .subscribe(
        data => {
          data.forEach(
            (item) => {
              super.items().push(new Nomenclature(
                item.id,
                item.article,
                item.name,
                item.comment,
                item.type,
                this.unitsRepository.findByElement(item.unit),
                item.price)
              )
            }
          );
        }
      );
  }

  createElement(): Nomenclature {
    return new Nomenclature(null, null, null, null, "MATERIAL");
  }
}
