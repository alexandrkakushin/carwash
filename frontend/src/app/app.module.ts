import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WashModule} from "./wash/wash.module";
import {RouterModule} from "@angular/router";
import {WashComponent} from "./wash/wash.component";
import {MaterialsCatalogComponent} from "./wash/catalogs/nomenclature/materials.component";
import {ServicesCatalogComponent} from "./wash/catalogs/nomenclature/services.component";
import {MechanismsCatalogComponent} from "./wash/catalogs/nomenclature/mechanisms.component";
import {ContractorsCatalogComponent} from "./wash/catalogs/contractors/contractors.component";
import {CitiesCatalogComponent} from "./wash/catalogs/cities/cities.component";
import {PricesComponent} from "./wash/prices/prices.component";
import {RefreshComponent} from "./wash/refresh.component";
import {UnitsCatalogComponent} from "./wash/catalogs/units/units.component";
import {StagesCatalogComponent} from "./wash/catalogs/stages/stages.component";
import {SectionsCatalogComponent} from "./wash/catalogs/sections/sections.component";
import {BuildingsCatalogComponent} from "./wash/catalogs/buildings/buildings.component";
import {TargetsCatalogComponent} from "./wash/catalogs/targets/targets.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, WashModule, RouterModule.forRoot([
      { path: "carwash", component: WashComponent},
      { path: "carwash/catalogs/contractors", component: ContractorsCatalogComponent},
      { path: "carwash/catalogs/cities", component: CitiesCatalogComponent},
      { path: "carwash/catalogs/units", component: UnitsCatalogComponent},
      { path: "carwash/catalogs/materials", component: MaterialsCatalogComponent},
      { path: "carwash/catalogs/services", component: ServicesCatalogComponent},
      { path: "carwash/catalogs/mechanisms", component: MechanismsCatalogComponent},
      { path: "carwash/catalogs/stages", component: StagesCatalogComponent },
      { path: "carwash/catalogs/sections", component: SectionsCatalogComponent },
      { path: "carwash/catalogs/buildings", component: BuildingsCatalogComponent },
      { path: "carwash/catalogs/targets", component: TargetsCatalogComponent },

      { path: "carwash/prices", component: PricesComponent},

      { path: "carwash/refresh", component: RefreshComponent},

      { path: "**", redirectTo: "/carwash" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
