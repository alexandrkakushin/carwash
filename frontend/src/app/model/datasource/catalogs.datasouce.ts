
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/observable/from";
import "rxjs/add/operator/toPromise";

import {CitiesRepository} from "../repository/catalogs/cities.repository";
import {UnitsMeasureRepository} from "../repository/catalogs/unitsMeasure.repository";
import {MechanismsRepository} from "../repository/catalogs/nomenclature/mechanisms.repository";
import {ServicesRepository} from "../repository/catalogs/nomenclature/services.repository";
import {MaterialsRepository} from "../repository/catalogs/nomenclature/materials.repository";
import {HttpClient} from "@angular/common/http";
import {CatalogCommon} from "../entity/catalogs/catalog.model";
import {GroupsContractorRepository} from "../repository/catalogs/groupsContractor.repository";
import {ContractorsRepository} from "../repository/catalogs/contractors.repository";
import {StagesRepository} from "../repository/catalogs/stages.repository";
import {SectionsRepository} from "../repository/catalogs/sections.repository";
import {BuildingsRepository} from "../repository/catalogs/buildings.repository";
import {TargetsRepository} from "../repository/catalogs/targets.repository";
import {AuthService} from "./auth.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class RestDataSource {

  private apiUrl = environment.backend + '/api';

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  item(id: number, repository: string): Observable<CatalogCommon> {
    return this.httpClient
      .get<CatalogCommon>(
        this.apiUrl + '/' + this.getController(repository) + '/' + id, { headers: this.authService.getSystemAuthorizationHeader() });
  }

  items(repository: string): Observable<CatalogCommon[]> {
    let controller = this.getController(repository);
    return this.httpClient
      .get<CatalogCommon[]>(
        this.apiUrl + '/' + controller, { headers: this.authService.getSystemAuthorizationHeader() });
  }

  deleteElement(element: CatalogCommon, repository: string): Observable<any> {
    return this.httpClient
      .delete(
        this.apiUrl + '/' + this.getController(repository) + '/' + element.id,  {headers: this.authService.getSystemAuthorizationHeader()});
  }

  addElement(element: CatalogCommon, repository: string): Observable<any> {
    let headers = this.authService.getSystemAuthorizationHeader()
      .append("Content-Type", "application/json");

    return this.httpClient
      .post(
        this.apiUrl + '/' + this.getController(repository), element,  {headers: headers});
  }

  editElement(element: CatalogCommon, repository: string): Observable<any> {
    let headers = this.authService.getSystemAuthorizationHeader()
      .append("Content-Type", "application/json");

    return this.httpClient
      .put(
        this.apiUrl + '/' + this.getController(repository), element, {headers: headers});
  }

  private getController(repository: string): string {
    let name = null;

    if (repository == "CitiesRepository") {
      name = "catalogs/cities";

    } else if (repository == "UnitsMeasureRepository") {
      name = "catalogs/units";

    } else if (repository == "NomenclaturesRepository") {
      name = "catalogs/nomenclatures";

    } else if (repository == "MaterialsRepository") {
      name = "catalogs/materials";

    } else if (repository == "MechanismsRepository") {
      name = "catalogs/mechanisms";

    } else if (repository == "ServicesRepository") {
      name = "catalogs/services";

    } else if (repository == "GroupsContractorRepository") {
      name = "catalogs/groupscontractor";

    } else if (repository == "ContractorsRepository") {
      name = "catalogs/contractors";

    } else if (repository == "StagesRepository") {
      name = "catalogs/stages";

    } else if (repository == "SectionsRepository") {
      name = "catalogs/sections";

    } else if (repository == "BuildingsRepository") {
      name = "catalogs/buildings";

    } else if (repository == "TargetsRepository") {
      name = "catalogs/targets";

    } else if (repository == "KitsRepository") {
      name = "catalogs/kits";

    }

    return name;
  }
}
