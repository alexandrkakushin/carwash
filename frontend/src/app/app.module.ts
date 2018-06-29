import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {WashModule} from "./wash/wash.module";
import {Router, RouterModule, Routes} from "@angular/router";
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
import {GroupsContractorCatalogComponent} from "./wash/catalogs/groupsContractor/groupContractor.component";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {LoginComponent} from "./wash/auth/login.component";
import {AuthService} from "./model/datasource/auth.service";
import {environment} from "../environments/environment";
import {EstimateProcessingComponent} from "./wash/processing/estimate.component";
import {KitsCatalogComponent} from "./wash/catalogs/kits/kits.component";
import {AdminComponent} from "./wash/admin/admin.component";

const routes: Routes = [
  { path: "carwash", component: WashComponent},

  { path: "carwash/catalogs/contractors", component: ContractorsCatalogComponent},
  { path: "carwash/catalogs/cities", component: CitiesCatalogComponent},
  { path: "carwash/catalogs/units", component: UnitsCatalogComponent},
  { path: "carwash/catalogs/materials", component: MaterialsCatalogComponent},
  { path: "carwash/catalogs/kits", component: KitsCatalogComponent},
  { path: "carwash/catalogs/services", component: ServicesCatalogComponent},
  { path: "carwash/catalogs/mechanisms", component: MechanismsCatalogComponent},
  { path: "carwash/catalogs/stages", component: StagesCatalogComponent },
  { path: "carwash/catalogs/sections", component: SectionsCatalogComponent },
  { path: "carwash/catalogs/buildings", component: BuildingsCatalogComponent },
  { path: "carwash/catalogs/targets", component: TargetsCatalogComponent },
  { path: "carwash/catalogs/groupscontractor", component: GroupsContractorCatalogComponent },

  // Цены
  { path: "carwash/prices/:id", component: PricesComponent},
  { path: "carwash/refresh", component: RefreshComponent},

  // Авторизация
  { path: 'carwash/login', component: LoginComponent},

  // Расчеты
  { path: 'carwash/processing/estimate/:id', component: EstimateProcessingComponent},

  // Администрирование
  { path: 'carwash/admin', component: AdminComponent},

  { path: "**", redirectTo: "/carwash" }
];

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers
        .set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule, BrowserModule, WashModule, RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(private authService: AuthService, private router: Router) {
    //authService.authenticate(credentials = {username: '', password: ''});
    if (!authService.authenticated) {
      this.router.navigateByUrl('/carwash/login');
    }
  }
}

