
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import {Router, RouterModule} from "@angular/router";
import {NavbarComponent} from "./navbar.component";
import {WashComponent} from "./wash.component";
import {MaterialsCatalogComponent} from "./catalogs/nomenclature/materials.component";
import {ServicesCatalogComponent} from "./catalogs/nomenclature/services.component";
import {MechanismsCatalogComponent} from "./catalogs/nomenclature/mechanisms.component";
import {ContractorsCatalogComponent} from "./catalogs/contractors/contractors.component";
import {CitiesCatalogComponent} from "./catalogs/cities/cities.component";
import {PricesComponent} from "./prices/prices.component";
import {RefreshComponent} from "./refresh.component";

// primeNg
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {GrowlModule} from 'primeng/growl';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {UnitsCatalogComponent} from "./catalogs/units/units.component";
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {StagesCatalogComponent} from "./catalogs/stages/stages.component";
import {SectionsCatalogComponent} from "./catalogs/sections/sections.component";
import {ListboxModule} from 'primeng/listbox';
import {BuildingsCatalogComponent} from "./catalogs/buildings/buildings.component";
import {TargetsCatalogComponent} from "./catalogs/targets/targets.component";
import {GroupsContractorCatalogComponent} from "./catalogs/groupsContractor/groupContractor.component";
import {LoginComponent} from "./auth/login.component";
import {CardModule} from 'primeng/card';
import {EstimateProcessingComponent} from "./processing/estimate.component";
import {TooltipModule} from 'primeng/tooltip';
import {FieldsetModule} from 'primeng/fieldset';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
import {KitsCatalogComponent} from "./catalogs/kits/kits.component";
import {AdminComponent} from "./admin/admin.component";

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    TableModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    DialogModule,
    GrowlModule,
    KeyFilterModule,
    InputMaskModule,
    DropdownModule,
    ToolbarModule,
    SplitButtonModule,
    ListboxModule,
    CardModule,
    TooltipModule,
    FieldsetModule,
    AccordionModule,
    PanelModule
  ],
  declarations: [
      WashComponent,
      RefreshComponent,
      NavbarComponent,
      PricesComponent,
      CitiesCatalogComponent,
      UnitsCatalogComponent,
      ContractorsCatalogComponent,
      MaterialsCatalogComponent,
      ServicesCatalogComponent,
      MechanismsCatalogComponent,
      StagesCatalogComponent,
      SectionsCatalogComponent,
      BuildingsCatalogComponent,
      TargetsCatalogComponent,
      GroupsContractorCatalogComponent,
      KitsCatalogComponent,
      AdminComponent,
      LoginComponent,

      EstimateProcessingComponent
  ],
  exports: [WashComponent],
  providers: []
})

export class WashModule {

  constructor() {}
}

