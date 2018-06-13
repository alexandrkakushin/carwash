import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AuthService} from "../../model/datasource/auth.service";
import {Message} from "primeng/api";
import {CitiesRepository} from "../../model/repository/cities.repository";
import {GroupsContractorRepository} from "../../model/repository/groupsContractor.repository";
import {ContractorsRepository} from "../../model/repository/contractors.repository";
import {UnitsMeasureRepository} from "../../model/repository/unitsMeasure.repository";
import {ServicesRepository} from "../../model/repository/services.repository";
import {MechanismsRepository} from "../../model/repository/mechanisms.repository";
import {MaterialsRepository} from "../../model/repository/materials.repository";
import {StagesRepository} from "../../model/repository/stages.repository";
import {SectionsRepository} from "../../model/repository/sections.repository";
import {BuildingsRepository} from "../../model/repository/buildings.repository";
import {TargetsRepository} from "../../model/repository/targets.repository";

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
