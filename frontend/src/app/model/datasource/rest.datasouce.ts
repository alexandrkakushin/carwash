
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/observable/from";

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
import {AuthService} from "./auth.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class RestDataSource {

  private apiUrl = environment.backend + '/api';

  constructor(private httpClient: HttpClient, private authService: AuthService) {}


  items(repository: string): Observable<CatalogCommon[]> {
    if (!this.authService.authenticated) {
      let _items: CatalogCommon[] = [];
      return Observable.from([_items]);
    }

    let controller = this.getController(repository);
    return this.httpClient
      .get<CatalogCommon[]>(
        this.apiUrl + '/' + controller, {headers: this.authService.getAuthorizationHeader()});
  }

  deleteElement(element: CatalogCommon, repository: string): Observable<any> {
    return this.httpClient
      .delete(
        this.apiUrl + '/' + this.getController(repository) + '/' + element.id,  {headers: this.authService.getAuthorizationHeader()});
  }

  addElement(element: CatalogCommon, repository: string): Observable<any> {
    let headers = this.authService.getAuthorizationHeader()
      .append("Content-Type", "application/json");

    return this.httpClient
      .post(
        this.apiUrl + '/' + this.getController(repository), element,  {headers: headers});
  }

  editElement(element: CatalogCommon, repository: string): Observable<any> {
    let headers = this.authService.getAuthorizationHeader()
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

    }

    return name;
  }
}
