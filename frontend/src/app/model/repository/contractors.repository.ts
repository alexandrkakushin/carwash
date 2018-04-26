
import {Injectable} from "@angular/core";
import {CommonRepository} from "./common.repository";
import {StaticDataSource} from "../datasource/static.datasource";

@Injectable()
export class ContractorsRepository extends CommonRepository {

 constructor(dataSource: StaticDataSource) {
   super(dataSource, ContractorsRepository.name)
 }

}
