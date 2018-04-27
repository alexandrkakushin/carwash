
import {OnInit} from "@angular/core";
import {Message} from "primeng/api";
import {CatalogOperation} from "./catalog.interface";
import {CitiesRepository} from "../../model/repository/cities.repository";
import {ServicesRepository} from "../../model/repository/services.repository";
import {MaterialsRepository} from "../../model/repository/materials.repository";
import {MechanismsRepository} from "../../model/repository/mechanisms.repository";
import {ContractorsRepository} from "../../model/repository/contractors.repository";
import {UnitsMeasureRepository} from "../../model/repository/unitsMeasure.repository";
import {StagesRepository} from "../../model/repository/stages.repository";
import {SectionsRepository} from "../../model/repository/sections.repository";
import {BuildingsRepository} from "../../model/repository/buildings.repository";
import {TargetsRepository} from "../../model/repository/targets.repository";

export abstract class AbstractCatalogComponent implements CatalogOperation, OnInit {

  name: string;
  cols: any[];
  selected: any = {name: ""};
  changed: any = {name: ""};

  displayDialog: boolean;

  msgs: Message[] = [];

  constructor(private repository, name: string) {
    this.setName(name);
  }

  ngOnInit(): void {
    this.cols = this.columns();
  }

  setName(name: string) {
    this.name = name;
  }

  columns(): any[] {
    return [];
  }

  // add/edit/remove view

  addElement(): void {
    this.showDialog();
    this.changed = {};
  }

  editElement(): void {
    this.showDialog();
    this.changed = { ... this.selected};
  }

  saveChanges(): void {
    this.hideDialog();
    if (this.changed.id) {
      this.edit(this.changed);
    } else {
      this.add(this.changed);
    }
  }

  private showDialog(): void {
    this.displayDialog = true;
  }

  hideDialog(): void {
    this.displayDialog = false;
  }

  refresh(): void {
    let result = this.repository.refresh();
    if (!result) {
      this.msgs.push({severity: 'error', summary: this.name, detail: 'Ошибка при получении данных'});
    }
  }


  isCity(): boolean {
    return this.repository instanceof CitiesRepository;
  }

  isUnit(): boolean {
    return this.repository instanceof UnitsMeasureRepository;
  }

  isNomenclature(): boolean {
    return this.repository instanceof ServicesRepository
      || this.repository instanceof MaterialsRepository
      || this.repository instanceof MechanismsRepository;
  }

  isContractor(): boolean {
    return this.repository instanceof ContractorsRepository;
  }

  isStage(): boolean {
    return this.repository instanceof StagesRepository;
  }

  isSection(): boolean {
    return this.repository instanceof SectionsRepository;
  }

  isBuilding(): boolean {
    return this.repository instanceof BuildingsRepository;
  }

  isTarget(): boolean {
    return this.repository instanceof TargetsRepository;
  }


  // operation with repository

  items(): any[] {
    return this.repository.items();
  };

  add(element: any): void {
    let result = this.repository.add(element);
    this.msgs = [];

    let severity = 'success';
    if (!result) {
      severity = 'error';
    }
    this.msgs.push({severity: severity, summary: this.name, detail: element.name});
  };

  edit(element: any): void {
    let result = this.repository.edit(element);
    this.msgs = [];
    let severity = 'error';
    if (result) {
      severity = 'success';
      this.selected = element;
    }
    this.msgs.push({severity: severity, summary: this.name, detail: element.name});
  };

  remove(): void {
    this.repository.remove(this.selected);
//    this.selected = null;
  };

}
