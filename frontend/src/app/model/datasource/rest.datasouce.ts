
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/observable/from";

import {City} from "../city.model";
import {UnitMeasure} from "../unitMeasure.model";
import {GroupContractor} from "../groupContractor.model";
import {Nomenclature} from "../nomenclature.model";
import {Contractor} from "../contractor.model";
import {Stage} from "../stage.model";
import {Section} from "../section.model";
import {Building} from "../building.model";
import {Target} from "../target.model";
import {CitiesRepository} from "../repository/cities.repository";
import {UnitsMeasureRepository} from "../repository/unitsMeasure.repository";
import {MechanismsRepository} from "../repository/mechanisms.repository";
import {ServicesRepository} from "../repository/services.repository";
import {MaterialsRepository} from "../repository/materials.repository";
import {HttpClient} from "@angular/common/http";
import {CatalogCommon} from "../catalog.model";
import {GroupsContractorRepository} from "../repository/groupsContractor.repository";
import {ContractorsRepository} from "../repository/contractors.repository";
import {StagesRepository} from "../repository/stages.repository";
import {SectionsRepository} from "../repository/sections.repository";
import {BuildingsRepository} from "../repository/buildings.repository";
import {TargetsRepository} from "../repository/targets.repository";

@Injectable()
export class RestDataSource {

  private apiUrl = 'http://localhost:8081/api';

  constructor(private httpClient: HttpClient) {}

  private groupsContractor: GroupContractor[] = [
    new GroupContractor(1, "Подрядчики"),
    new GroupContractor(2, "Поставщики"),
    new GroupContractor(3, "Спец. техника"),
    new GroupContractor(4, "Людские ресурсы"),
    new GroupContractor(5, "Проектирование")
  ];

  private materials: Nomenclature[] = [
    // new Nomenclature(1, "100500", "Щебень гранитный 20/40", this.unitsMeasure[1], 250, "no comment"),
    // new Nomenclature(2, "100501", "Конус полимерпесчаный", this.unitsMeasure[2], 150),
    // new Nomenclature(3, "100502", "Битумно-каучуковая мастика", this.unitsMeasure[3], 400),
    // new Nomenclature(4, "100503", "Доска обрезная 25х150х6000", this.unitsMeasure[1], 550)
  ];

  private services: Nomenclature[] = [
    // new Nomenclature(1, "200500", "Устройство основания песчаного", this.unitsMeasure[1], 250, "Особое внимание к основанию"),
    // new Nomenclature(2, "200501", "Затирка поверхности бетона УШМ с упрочнением топпингом", this.unitsMeasure[0], 150),
    // new Nomenclature(3, "200502", "Монтаж профлиста на вспомогательное помещение для флотатора", this.unitsMeasure[0], 400)
  ];

  private mechanisms: Nomenclature[] = [
    // new Nomenclature(1, "300500", "Монтаж сборных железобетонных плит", this.unitsMeasure[4], 250),
    // new Nomenclature(2, "300501", "Монтаж элементов железобетонных колодцев 1,5м", this.unitsMeasure[2], 150),
    // new Nomenclature(3, "300502", "Монтаж профнастила Н75-750-0,8", this.unitsMeasure[5], 400, "Примечание №123")
  ];

  private contractors: Contractor[] = [
    // new Contractor(1, "ИП Иванов И.И.", this.cities[2], this.groupsContractor[0]),
    // new Contractor(2, "ИП Сидоров К.И.", this.cities[1], this.groupsContractor[1]),
    // new Contractor(3, "ИП Смирнов Н.П.", this.cities[3], this.groupsContractor[2]),
    // new Contractor(4, "ООО Песок Черноземья", this.cities[0], this.groupsContractor[1], "sand@vrn.ru", "8 4732 343 34 64"),
    // new Contractor(5, "ИП Иванов М.И.", this.cities[4], this.groupsContractor[4]),
    // new Contractor(6, "ИП Иванов И.Е.", this.cities[5], this.groupsContractor[3])
  ];

  // Расчеты

  private stages: Stage[] = [
    new Stage(1, "Бетонирование фундамента"),
    new Stage(2, "2 Бетонирование фундамента"),
    new Stage(3, "3 Бетонирование фундамента"),
    new Stage(4, "4 Бетонирование фундамента"),
    new Stage(5, "5 Бетонирование фундамента"),
    new Stage(6, "6 Бетонирование фундамента"),
    new Stage(7, "7 Бетонирование фундамента"),
    new Stage(8, "8 Бетонирование фундамента"),
    new Stage(9, "9 Бетонирование фундамента"),
    new Stage(10, "10 Бетонирование фундамента"),
    new Stage(11, "11 Бетонирование фундамента"),
    new Stage(12, "12 Бетонирование фундамента"),
    new Stage(13, "13 Бетонирование фундамента")
  ];

  private sections: Section[] = [
    new Section(1, "Фундамент с одной плитой"),
    new Section(2, "Фундамент 2 плиты"),
    new Section(3, "Сборные плиты")
  ];

  private buildings: Building[] = [
    new Building(1, "Первый тип здания"),
    new Building(2, "Второй тип здания"),
    new Building(3, "Третий тип здания")
  ];

  private targets: Target[] = [
    new Target(1, "Первое здание"),
    new Target(2, "Второе здание"),
    new Target(3, "Третье здание")
  ];

  getStages(): Observable<Stage[]> {
    return Observable.from([this.stages]);
  }

  getSections(): Observable<Section[]> {
    return Observable.from([this.sections]);
  }

  getBuildings(): Observable<Building[]> {
    return Observable.from([this.buildings]);
  }

  getTargets(): Observable<Target[]> {
    return Observable.from([this.targets]);
  }

  getUnitsMeasure(): Observable<UnitMeasure[]> {
    return this.httpClient.get<UnitMeasure[]>(this.apiUrl + '/catalogs/units');
  }

  getGroupsContractor(): Observable<GroupContractor[]> {
    return Observable.from([this.groupsContractor]);
  }





  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.apiUrl + '/catalogs/cities');
  }

  getMaterials(): Observable<Nomenclature[]> {
    return this.httpClient.get<Nomenclature[]>(this.apiUrl + '/catalogs/materials');
  }

  getServices(): Observable<Nomenclature[]> {
    return this.httpClient.get<Nomenclature[]>(this.apiUrl + '/catalogs/services');
  }

  getMechanisms(): Observable<Nomenclature[]> {
    return this.httpClient.get<Nomenclature[]>(this.apiUrl + '/catalogs/mechanisms');
  }

  getContractors(): Observable<Contractor[]> {
    return Observable.from([this.contractors]);
  }





  items(repository: string): Observable<CatalogCommon[]> {
    let controller = this.getController(repository);
    return this.httpClient.get<CatalogCommon[]>(this.apiUrl + '/' + controller);
  }

  deleteElement(element: CatalogCommon, repository: string): Observable<any> {
    return this.httpClient
      .delete(this.apiUrl + '/' + this.getController(repository) + '/' + element.id);
  }

  addElement(element: CatalogCommon, repository: string): Observable<any> {
    return this.httpClient
      .post(this.apiUrl + '/' + this.getController(repository), element);
  }

  editElement(element: CatalogCommon, repository: string): Observable<any> {
    return this.httpClient
      .put(this.apiUrl + '/' + this.getController(repository), element);
  }

  private getController(repository: string): string {
    let name = null;
    // todo: расширить условия по репозиториям

    if (repository == CitiesRepository.name) {
      name = "catalogs/cities";

    } else if (repository == UnitsMeasureRepository.name) {
      name = "catalogs/units";

    } else if (repository == MaterialsRepository.name) {
      name = "catalogs/materials";

    } else if (repository == MechanismsRepository.name) {
      name = "catalogs/mechanisms";

    } else if (repository == ServicesRepository.name) {
      name = "catalogs/services";

    } else if (repository == GroupsContractorRepository.name) {
      name = "catalogs/groupscontractor";

    } else if (repository == ContractorsRepository.name) {
      name = "catalogs/contractors";

    } else if (repository == StagesRepository.name) {
      name = "catalogs/stages";

    } else if (repository == SectionsRepository.name) {
      name = "catalogs/sections";

    } else if (repository == BuildingsRepository.name) {
      name = "catalogs/buildings";

    } else if (repository == TargetsRepository.name) {
      name = "catalogs/targets";

    }

    return name;
  }
}
