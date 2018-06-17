
import {Component} from "@angular/core";
import {CatalogComponentCommon} from "../catalog.component";
import {SectionsRepository} from "../../../model/repository/sections.repository";
import {SelectItem} from "primeng/api";
import {StagesRepository} from "../../../model/repository/stages.repository";
import {Section} from "../../../model/section.model";
import {Stage} from "../../../model/stage.model";

@Component({
  selector: "catalog-sections",
  moduleId: module.id,
  templateUrl: "../items.component.html"
})

export class SectionsCatalogComponent extends CatalogComponentCommon {

  stages: SelectItem[];

  constructor(repository: SectionsRepository,
              private repositoryStages: StagesRepository) {
    super(repository, "Разделы");
    super.setPrototype(new Section());
  }

  initComponent(): void {
    this.repositoryStages.getItems()
      .subscribe(
        data => {
          this.stages = data.map(
            (item) => ({label: item.name, value: Stage.assign(item)})
          )
        }
      );
  }

  columns(): any {
    return [
      {field: "id", header: "ID"},
      {field: "name", header: "Наименование"},
      {field: "comment", header: "Комментарий"}
    ];
  }
}
