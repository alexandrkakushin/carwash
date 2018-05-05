
import {UnitsMeasureRepository} from "../repository/unitsMeasure.repository";
import {CitiesRepository} from "../repository/cities.repository";
import {GroupsContractorRepository} from "../repository/groupsContractor.repository";
import {MaterialsRepository} from "../repository/materials.repository";
import {ServicesRepository} from "../repository/services.repository";
import {MechanismsRepository} from "../repository/mechanisms.repository";
import {StagesRepository} from "../repository/stages.repository";
import {SectionsRepository} from "../repository/sections.repository";
import {BuildingsRepository} from "../repository/buildings.repository";
import {TargetsRepository} from "../repository/targets.repository";

//@Injectable()
export class RepositoriesService {

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
    private targetsRepository: TargetsRepository)
  {

  }

  updateAll(): void {
    this.unitMeasureRepository.init();
    this.citiesRepository.init();
    this.groupsContractorRepository.init();
    this.materialsRepository.init();
    this.servicesRepository.init();
    this.mechanismsRepository.init();
    this.stagesRepository.init();
    this.sectionsRepository.init();
    this.buildingsRepository.init();
    this.targetsRepository.init();
  }
}
