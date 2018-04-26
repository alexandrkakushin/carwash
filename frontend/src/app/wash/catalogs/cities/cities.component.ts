
import {Component} from "@angular/core";
import {CitiesRepository} from "../../../model/repository/cities.repository";
import {AbstractCatalogComponent} from "../catalog.abstract";

@Component({
  selector: "catalog-cities",
  moduleId: module.id,
  templateUrl: "../list.component.html"
})

export class CitiesCatalogComponent extends AbstractCatalogComponent {

  constructor(repository: CitiesRepository) {
    super(repository, "Города");
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "comment", header: "Комментарий"}
    ];
  }
}
