
import {Injectable} from "@angular/core";
import {StaticDataSource} from "../datasource/static.datasource";
import {CommonRepository} from "./common.repository";
import {MaterialsRepository} from "./materials.repository";
import {ServicesRepository} from "./services.repository";
import {MechanismsRepository} from "./mechanisms.repository";
import {Stage} from "../stage.model";

@Injectable()
export class StagesRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource,
              private materialsRepository: MaterialsRepository,
              private servicesRepository: ServicesRepository,
              private mechanismsRepository: MechanismsRepository) {
    super(dataSource, "StagesRepository");
  }

  init() {
    super.getDataSource().items("StagesRepository")
      .subscribe(
        data => {
          data.forEach(
            (item) => {
              super.items().push(new Stage(
                item.id,
                item.name,
                item.comment,
                this.materialsRepository.findByElement(item.material),
                this.servicesRepository.findByElement(item.service),
                this.mechanismsRepository.findByElement(item.mechanism))
              )
            }
          );
        }
      );
  }

}
