import {StaticDataSource} from "../datasource/static.datasource";
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {UnitMeasure} from "../unitMeasure.model";

@Injectable()
export class UnitsMeasureRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, UnitsMeasureRepository.name);
  }

  init() {
    super.getDataSource().items(UnitsMeasureRepository.name)
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

  // edit(element: UnitMeasure): boolean {
  //   let result = super.getDataSource().editElement({ ...element}, UnitsMeasureRepository.name);
  //   if (result) {
  //     let index = super.items().findIndex(line => line.id == element.id);
  //     super.items()[index] = element;
  //   }
  //
  //   return result;
  // }

}
