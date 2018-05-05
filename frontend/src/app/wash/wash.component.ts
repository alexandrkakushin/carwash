import {Component} from "@angular/core";
import {UnitsMeasureRepository} from "../model/repository/unitsMeasure.repository";
import {CitiesRepository} from "../model/repository/cities.repository";
import {GroupsContractorRepository} from "../model/repository/groupsContractor.repository";
import {MaterialsRepository} from "../model/repository/materials.repository";
import {ServicesRepository} from "../model/repository/services.repository";
import {MechanismsRepository} from "../model/repository/mechanisms.repository";
import {StagesRepository} from "../model/repository/stages.repository";
import {SectionsRepository} from "../model/repository/sections.repository";
import {BuildingsRepository} from "../model/repository/buildings.repository";
import {AuthService} from "../model/datasource/auth.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {TargetsRepository} from "../model/repository/targets.repository";

@Component({
  selector:"wash",
  moduleId: module.id,
  templateUrl: "wash.component.html"
})

export class WashComponent {

  constructor(
    private unitMeasureRepository: UnitsMeasureRepository,
    private citiesRepository: CitiesRepository,
    private groupsContractorRepository: GroupsContractorRepository,
    private materialsRepository: MaterialsRepository,
    private servicesRepository: ServicesRepository,
    private mechanismsRepository: MechanismsRepository,
    private stagesRepository: StagesRepository,
    private sectionsRepository: SectionsRepository,
    private buildingsRepository: BuildingsRepository,
    private targetsRepository: TargetsRepository
  ) {}
}
