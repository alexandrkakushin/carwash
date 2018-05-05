import {StaticDataSource} from "../datasource/static.datasource";
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {UnitMeasure} from "../unitMeasure.model";

@Injectable()
export class UnitsMeasureRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "UnitsMeasureRepository");
  }

  init() {
    super.getDataSource().items("UnitsMeasureRepository")
      .subscribe(
        data => {
          data.forEach(
            (item) => {
              super.items().push(new UnitMeasure(item.id, item.name, item.comment))
            }
          );
        }
      );
  }
}
