import {StaticDataSource} from "../datasource/static.datasource";
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {Section} from "../section.model";
import {StagesRepository} from "./stages.repository";

@Injectable()
export class SectionsRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource, private stagesRepository: StagesRepository) {
    super(dataSource, SectionsRepository.name);
  }

  init() {
    super.getDataSource().items(SectionsRepository.name)
      .subscribe(
        data => {
          data.forEach(
            (item) => {
              super.items().push(new Section(
                item.id,
                item.name,
                item.comment,
                item.stages.map(
                  (itemStage) => {return this.stagesRepository.findByElement(itemStage)}
                ))
              )
            }
          );
        }
      );
  }
}
