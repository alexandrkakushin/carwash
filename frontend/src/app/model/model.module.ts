
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
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

@NgModule({
  imports: [HttpModule],
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
    StaticDataSource
  ]
})

export class ModelModule {}
