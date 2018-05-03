
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../datasource/static.datasource";
import {BuildingsRepository} from "./buildings.repository";
import {CitiesRepository} from "./cities.repository";
import {Target} from "../target.model";

@Injectable()
export class TargetsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource,
              private buildingsRepository: BuildingsRepository,
              private citiesRepository: CitiesRepository) {
    super(dataSource, TargetsRepository.name);
  }

  init() {
    super.getDataSource().items(TargetsRepository.name)
      .subscribe(
        data => {
          data.forEach(
            (item) => {
              super.items().push(new Target(
                item.id,
                item.name,
                item.comment,
                this.buildingsRepository.findByElement(item.building),
                this.citiesRepository.findByElement(item.city),
                item.point)
              )
            }
          );
        }
      );
  }

}
