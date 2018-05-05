
import {Injectable} from "@angular/core";
import {StaticDataSource} from "../datasource/static.datasource";
import {CommonRepository} from "./common.repository";
import {GroupContractor} from "../groupContractor.model";

@Injectable()
export class GroupsContractorRepository extends CommonRepository {

  constructor(dataSource: StaticDataSource) {
    super(dataSource, "GroupsContractorRepository");
  }

  init() {
    super.getDataSource().items("GroupsContractorRepository")
      .subscribe(
        data => {
          data.forEach(
            (item) => {
              super.items().push(new GroupContractor(
                item.id,
                item.name,
                item.comment)
             )
            }
          );
        }
      );
  }

}
