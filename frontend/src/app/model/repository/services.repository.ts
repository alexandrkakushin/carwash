
import {Injectable} from "@angular/core";
import {StaticDataSource} from "../datasource/static.datasource";
import {CommonRepository} from "./common.repository";
import {UnitsMeasureRepository} from "./unitsMeasure.repository";
import {Nomenclature} from "../nomenclature.model";

@Injectable()
export class ServicesRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource, private unitsRepository: UnitsMeasureRepository) {
    super(dataSource, ServicesRepository.name);
  }

  init() {
    super.getDataSource().items(ServicesRepository.name)
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
    return new Nomenclature(null, null, null, null, "SERVICE");
  }
}
