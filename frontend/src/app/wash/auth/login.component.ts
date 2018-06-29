import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AuthService} from "../../model/datasource/auth.service";
import {Message} from "primeng/api";
import {CitiesRepository} from "../../model/repository/catalogs/cities.repository";
import {GroupsContractorRepository} from "../../model/repository/catalogs/groupsContractor.repository";
import {ContractorsRepository} from "../../model/repository/catalogs/contractors.repository";
import {UnitsMeasureRepository} from "../../model/repository/catalogs/unitsMeasure.repository";
import {ServicesRepository} from "../../model/repository/catalogs/nomenclature/services.repository";
import {MechanismsRepository} from "../../model/repository/catalogs/nomenclature/mechanisms.repository";
import {MaterialsRepository} from "../../model/repository/catalogs/nomenclature/materials.repository";
import {StagesRepository} from "../../model/repository/catalogs/stages.repository";
import {SectionsRepository} from "../../model/repository/catalogs/sections.repository";
import {BuildingsRepository} from "../../model/repository/catalogs/buildings.repository";
import {TargetsRepository} from "../../model/repository/catalogs/targets.repository";

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  msgs: Message[] = [];

  credentials = {username: '', password: ''};

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/carwash')
    });

    this.authService.getMessages().subscribe(
      data => {
        this.msgs = data;
      }
    );
  }
}
