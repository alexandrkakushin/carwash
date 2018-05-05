
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../datasource/static.datasource";
import {City} from "../city.model";

@Injectable()
export class CitiesRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "CitiesRepository");
  }

  init() {
    super.getDataSource().items("CitiesRepository")
      .subscribe(
        data => {
          data.forEach(
            (item) => {
              super.items().push(new City(item.id, item.name, item.comment))
            }
          );
        }
      );
  }
}
