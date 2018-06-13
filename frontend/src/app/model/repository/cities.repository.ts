
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../datasource/static.datasource";
import {City} from "../city.model";
import "rxjs/add/observable/of";

@Injectable()
export class CitiesRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "CitiesRepository");
  }

  assign(element: any): City {
    return City.assign(element);
  }
}
