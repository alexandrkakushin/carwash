
import { NgModule } from "@angular/core";
import {StaticDataSource} from "./datasource/static.datasource";
import {MaterialsRepository} from "./repository/catalogs/nomenclature/materials.repository";
import {ServicesRepository} from "./repository/catalogs/nomenclature/services.repository";
import {MechanismsRepository} from "./repository/catalogs/nomenclature/mechanisms.repository";
import {CitiesRepository} from "./repository/catalogs/cities.repository";
import {ContractorsRepository} from "./repository/catalogs/contractors.repository";
import {GroupsContractorRepository} from "./repository/catalogs/groupsContractor.repository";
import {UnitsMeasureRepository} from "./repository/catalogs/unitsMeasure.repository";
import {StagesRepository} from "./repository/catalogs/stages.repository";
import {SectionsRepository} from "./repository/catalogs/sections.repository";
import {BuildingsRepository} from "./repository/catalogs/buildings.repository";
import {TargetsRepository} from "./repository/catalogs/targets.repository";
import {RestDataSource} from "./datasource/catalogs.datasouce";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./datasource/auth.service";
import {KitsRepository} from "./repository/catalogs/kits.repository";
import {AdminService} from "./datasource/admin.service";
import {PricesDatasource} from "./datasource/prices.datasource";
import {PricesRepository} from "./repository/prices/prices.repository";
import {NomenclaturesRepository} from "./repository/catalogs/nomenclature/nomenclatures.repository";

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
    NomenclaturesRepository,
    ServicesRepository,
    MechanismsRepository,
    MaterialsRepository,
    KitsRepository,
    PricesRepository,

    { provide: StaticDataSource, useClass: RestDataSource },
    PricesDatasource,
    AuthService,
    AdminService
  ]
})

export class ModelModule {}

