
import {Component} from "@angular/core";
import {CitiesRepository} from "../../../model/repository/catalogs/cities.repository";
import {CatalogComponentCommon} from "../catalog.component";
import {City} from "../../../model/entity/catalogs/city.model";

@Component({
  selector: "catalog-cities",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class CitiesCatalogComponent extends CatalogComponentCommon {

  constructor(repository: CitiesRepository) {
    super(repository, "Города");
    super.setPrototype(new City());
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "comment", header: "Комментарий"}
    ];
  }
}
