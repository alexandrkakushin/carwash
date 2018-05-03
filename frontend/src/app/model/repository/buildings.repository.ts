
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../datasource/static.datasource";
import {SectionsRepository} from "./sections.repository";
import {Building} from "../building.model";
import {MessageService} from "primeng/components/common/messageservice";

@Injectable()
export class BuildingsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource,
              private sectionsRepository: SectionsRepository) {
    super(dataSource, BuildingsRepository.name);
  }

  init() {
    super.getDataSource().items(BuildingsRepository.name)
      .subscribe(
        data => {
          data.forEach(
            (item) => {
              super.items().push(new Building(
                item.id,
                item.name,
                item.comment,
                item.sections.map(
                  (itemStage) => {return this.sectionsRepository.findByElement(itemStage)}
                ))
              )
            }
          );
        }
      );
  }
}
