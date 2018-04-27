
import {Injectable} from "@angular/core";
import {Nomenclature} from "../nomenclature.model";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import {City} from "../city.model";
import {Contractor} from "../contractor.model";
import {GroupContractor} from "../groupContractor.model";
import {UnitMeasure} from "../unitMeasure.model";
import {Stage} from "../stage.model";
import {Section} from "../section.model";
import {Building} from "../building.model";
import {Target} from "../target.model";

@Injectable()
export class StaticDataSource {

  private unitsMeasure: UnitMeasure[] = [
    new UnitMeasure(1, "м2"),
    new UnitMeasure(2, "м3"),
    new UnitMeasure(3, "шт"),
    new UnitMeasure(4, "кг"),
    new UnitMeasure(5, "элемент"),
    new UnitMeasure(6, "8 часов")
  ];

  private groupsContractor: GroupContractor[] = [
    new GroupContractor(1, "Подрядчики"),
    new GroupContractor(2, "Поставщики"),
    new GroupContractor(3, "Спец. техника"),
    new GroupContractor(4, "Людские ресурсы"),
    new GroupContractor(5, "Проектирование")
  ];

  private cities: City[] = [
    new City(1, "Воронеж", "Столица Черноземья"),
    new City(2, "Липецк"),
    new City(3, "Белгород"),
    new City(4, "Саратов"),
    new City(5, "Тамбов"),
    new City(6, "Санкт-Петербург"),
    new City(7, "Орел"),
    new City(8, "Данков"),
    new City(9, "Щелково"),
    new City(10, "Мытищи"),
    new City(11, "Долгопрудный"),
    new City(12, "Реутов"),
    new City(13, "Лобня"),
    new City(14, "Электросталь"),
    new City(15, "Ногинск"),
    new City(16, "Истра")
  ];

  private materials: Nomenclature[] = [
    new Nomenclature(1, "100500", "Щебень гранитный 20/40", this.unitsMeasure[1], 250, "no comment"),
    new Nomenclature(2, "100501", "Конус полимерпесчаный", this.unitsMeasure[2], 150),
    new Nomenclature(3, "100502", "Битумно-каучуковая мастика", this.unitsMeasure[3], 400),
    new Nomenclature(4, "100503", "Доска обрезная 25х150х6000", this.unitsMeasure[1], 550)
  ];

  private services: Nomenclature[] = [
    new Nomenclature(1, "200500", "Устройство основания песчаного", this.unitsMeasure[1], 250, "Особое внимание к основанию"),
    new Nomenclature(2, "200501", "Затирка поверхности бетона УШМ с упрочнением топпингом", this.unitsMeasure[0], 150),
    new Nomenclature(3, "200502", "Монтаж профлиста на вспомогательное помещение для флотатора", this.unitsMeasure[0], 400)
  ];

  private mechanisms: Nomenclature[] = [
    new Nomenclature(1, "300500", "Монтаж сборных железобетонных плит", this.unitsMeasure[4], 250),
    new Nomenclature(2, "300501", "Монтаж элементов железобетонных колодцев 1,5м", this.unitsMeasure[2], 150),
    new Nomenclature(3, "300502", "Монтаж профнастила Н75-750-0,8", this.unitsMeasure[5], 400, "Примечание №123")
  ];

  private contractors: Contractor[] = [
    new Contractor(1, "ИП Иванов И.И.", this.cities[2], this.groupsContractor[0]),
    new Contractor(2, "ИП Сидоров К.И.", this.cities[1], this.groupsContractor[1]),
    new Contractor(3, "ИП Смирнов Н.П.", this.cities[3], this.groupsContractor[2]),
    new Contractor(4, "ООО Песок Черноземья", this.cities[0], this.groupsContractor[1], "sand@vrn.ru", "8 4732 343 34 64"),
    new Contractor(5, "ИП Иванов М.И.", this.cities[4], this.groupsContractor[4]),
    new Contractor(6, "ИП Иванов И.Е.", this.cities[5], this.groupsContractor[3])
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
    return Observable.from([this.unitsMeasure]);
  }

  getGroupsContractor(): Observable<GroupContractor[]> {
    return Observable.from([this.groupsContractor]);
  }

  getCities(): Observable<City[]> {
    return Observable.from([this.cities]);
  }

  getMaterials(): Observable<Nomenclature[]> {
    return Observable.from([this.materials]);
  }

  getServices(): Observable<Nomenclature[]> {
    return Observable.from([this.services]);
  }

  getMechanisms(): Observable<Nomenclature[]> {
    return Observable.from([this.mechanisms]);
  }

  getContractors(): Observable<Contractor[]> {
    return Observable.from([this.contractors]);
  }




  items(repository: string): Observable<any[]> {
    let result = null;
    return result;
  }

  deleteElement(element: any, repository: string): boolean {
    return true;
  }

  addElement(element: any, repository: string): number {
    return 0;
  }

  editElement(element: any, repository: string): boolean {
    return true;
  }

}
