
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
import {CatalogCommon} from "../../model/catalog.model";
import {GroupsContractorRepository} from "../../model/repository/groupsContractor.repository";
import {KitsRepository} from "../../model/repository/kits.repository";

export abstract class CatalogComponentCommon implements CatalogOperation, OnInit {

  name: string;
  cols: any[];
  selected: CatalogCommon;
  changed: CatalogCommon;

  source: CatalogCommon;

  msgs: Message[] = [];

  displayDialog: boolean;

  constructor(private repository, name: string) {
    this.setName(name);
    this.repository.update();
  }

  ngOnInit(): void {
    this.initComponent();
    this.cols = this.columns();
  }

  setName(name: string) {
    this.name = name;
  }

  columns(): any[] {
    return [];
  }

  initComponent(): void {}

  setPrototype(source: CatalogCommon) {
    this.selected = source.clone();
    this.changed  = source.clone();
    this.source   = source.clone();
  }

  private subscribeMessages(): void {
    this.repository.getMessages().subscribe(
      data => {
        this.msgs = data;
      }
    );
  }

  // add/edit/remove view

  addElement(): void {
    this.showDialog();
    this.changed = this.source.clone();
  }

  copyElement(): void {
    this.showDialog();
    this.repository.getItem(this.selected.id)
      .subscribe(
        (value) => {
          this.changed = this.repository.assign(value);
          this.changed.id = null;
        }
      );
  }

  editElement(): void {
    this.showDialog();
    this.repository.getItem(this.selected.id)
      .subscribe(
        (value) => {
          this.changed = this.repository.assign(value);
          console.log(this.changed);
        }
      );
  }

  saveChanges(): void {
    if (this.changed.id) {
      this.edit(this.changed);
    } else {
      this.add(this.changed);
    }
    this.hideDialog();
  }

  private showDialog(): void {
    this.displayDialog = true;
  }

  hideDialog(): void {
    this.displayDialog = false;
    this.changed = this.source.clone();
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

  isGroupContractor(): boolean {
    return this.repository instanceof GroupsContractorRepository;
  }

  isKit(): boolean {
    return this.repository instanceof KitsRepository;
  }

  // operation with repository

  update(): void {
    this.repository.update();
  }

  items(): CatalogCommon[] {
    return this.repository.items();
  };

  add(element: CatalogCommon): void {
    this.repository.add(element);
    this.subscribeMessages();
  };

  edit(element: CatalogCommon): void {
    this.repository.edit(element);
    this.subscribeMessages();
  };

  remove(): void {
    this.repository.remove(this.selected);
    this.subscribeMessages();
  };
}
