
import { NgModule } from "@angular/core";
import {StaticDataSource} from "./datasource/static.datasource";
import {MaterialsRepository} from "./repository/materials.repository";
import {ServicesRepository} from "./repository/services.repository";
import {MechanismsRepository} from "./repository/mechanisms.repository";
import {CitiesRepository} from "./repository/cities.repository";
import {ContractorsRepository} from "./repository/contractors.repository";
import {GroupsContractorRepository} from "./repository/groupsContractor.repository";
import {UnitsMeasureRepository} from "./repository/unitsMeasure.repository";
import {StagesRepository} from "./repository/stages.repository";
import {SectionsRepository} from "./repository/sections.repository";
import {BuildingsRepository} from "./repository/buildings.repository";
import {TargetsRepository} from "./repository/targets.repository";
import {RestDataSource} from "./datasource/catalogs.datasouce";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./datasource/auth.service";
import {KitsRepository} from "./repository/kits.repository";
import {AdminService} from "./datasource/admin.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    TargetsRepository,
    BuildingsRepository,
    SectionsRepository,
    StagesRepository,
    UnitsMeasureRepository,
    GroupsContractorRepository,
    ContractorsRepository,
    CitiesRepository,
    ServicesRepository,
    MechanismsRepository,
    MaterialsRepository,
    KitsRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
    AuthService,
    AdminService
  ]
})

export class ModelModule {}

