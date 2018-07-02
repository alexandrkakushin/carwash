
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Message, SelectItem} from "primeng/api";
import {PricesRepository} from "../../model/repository/prices/prices.repository";
import {Price} from "../../model/entity/price.model";
import {Nomenclature} from "../../model/entity/catalogs/nomenclature.model";
import {NomenclaturesRepository} from "../../model/repository/catalogs/nomenclature/nomenclatures.repository";
import {City} from "../../model/entity/catalogs/city.model";
import {CitiesRepository} from "../../model/repository/catalogs/cities.repository";

@Component({
  selector: "prices",
  moduleId: module.id,
  templateUrl: "prices.component.html"
})

export class PricesComponent implements OnInit {

  private idNomenclature: number;

  cities: SelectItem[];

  nomenclature: Nomenclature;
  nameCatalog: string;
  msgs: Message[] = [];

  selected: Price = new Price();
  changed: Price = new Price();
  source: Price = new Price();
  displayDialog: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private repositoryNomenclatures: NomenclaturesRepository,
    private repositoryCities: CitiesRepository,
    private repository: PricesRepository) {

    this.repository.clear();

    activateRoute.params.subscribe(
      params => {
        this.idNomenclature = params['id'];
      });
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "date", header: "Дата"},
      {field: "city", header: "Город"},
      {field: "value", header: "Цена"}
    ];
  }

  ngOnInit(): void {
    this.repositoryCities.getItems()
      .subscribe(
        (data) => {
          this.cities = data.map(
            (item, index) => ({label: item.name, value: City.assign(item)})
          );
        }
      );

    this.repositoryNomenclatures.getItem(this.idNomenclature)
      .toPromise()
      .then(nomenclature => Nomenclature.assign(nomenclature))
      .then(nomenclature =>
        {
          this.nomenclature = nomenclature;
          this.repository.update(nomenclature);

          if (this.nomenclature.isMaterial()) {
            this.nameCatalog = "Материалы";
          } else if (this.nomenclature.isMechanism()) {
            this.nameCatalog = "Механизмы";
          } else if (this.nomenclature.isService()) {
            this.nameCatalog = "Работы";
          }
        }
      );
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
          this.changed = Price.assign(value);
          this.changed.id = null;
        }
      );
  }

  editElement(): void {
    this.showDialog();
    this.repository.getItem(this.selected.id)
      .subscribe(
        (value) => {
          this.changed = Price.assign(value);
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

  showDialog(): void {
    this.displayDialog = true;
  }

  hideDialog(): void {
    this.displayDialog = false;
    this.changed = this.source.clone();
  }

  // operation with repository

  update(): void {
    this.repository.update(this.nomenclature);
  }

  items(): Price[] {
    return this.repository.items();
  };

  add(element: Price): void {
    element.nomenclature = this.nomenclature;

    this.repository.add(element);
    this.subscribeMessages();
  };

  edit(element: Price): void {
    element.nomenclature = this.nomenclature;

    this.repository.edit(element);
    this.subscribeMessages();
  };

  remove(): void {
    this.repository.remove(this.selected);
    this.subscribeMessages();
  };
}
