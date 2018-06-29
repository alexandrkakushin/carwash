
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Contractor} from "../../model/entity/catalogs/contractor.model";
import {ContractorsRepository} from "../../model/repository/catalogs/contractors.repository";
import {Message} from "primeng/api";
import {PricesRepository} from "../../model/repository/prices/prices.repository";
import {Price} from "../../model/entity/price.model";
import {Nomenclature} from "../../model/entity/catalogs/nomenclature.model";
import {NomenclaturesRepository} from "../../model/repository/catalogs/nomenclature/nomenclatures.repository";

@Component({
  selector: "prices",
  moduleId: module.id,
  templateUrl: "prices.component.html"
})

export class PricesComponent implements OnInit {

  private idNomenclature: number;

  nomenclature: Nomenclature;
  msgs: Message[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private nomenclaturesRepository: NomenclaturesRepository,
    private repository: PricesRepository) {

    this.repository.clear();

    activateRoute.params.subscribe(
      params => {
        this.idNomenclature = params['id'];
      });
  }

  ngOnInit(): void {
    this.nomenclaturesRepository.getItem(this.idNomenclature)
      .toPromise()
      .then(nomenclature => Nomenclature.assign(nomenclature))
      .then(nomenclature =>
        {
          this.nomenclature = nomenclature;
          this.repository.update(nomenclature);
        }
      );
  }

  items(): Price[] {
    return this.repository.items();
  }

  nameCatalog(): string {
    let name = "";

    if (this.nomenclature.isMaterial()) {
      name = "Материалы";
    } else if (this.nomenclature.isMechanism()) {
      name = "Механизмы";
    } else if (this.nomenclature.isService()) {
      name = "Работы";
    }

    return name;
  }

  gotoCatalog(): void {
    let url;

    if (this.nomenclature.isMaterial()) {
      url = "carwash/catalogs/materials";
    } else if (this.nomenclature.isMechanism()) {
      url = "carwash/catalogs/mechanisms";
    } else if (this.nomenclature.isService()) {
      url = "carwash/catalogs/services";
    }

    this.router.navigateByUrl(url);
  }
}
