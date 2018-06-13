
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Target} from "../../model/target.model";
import {TargetsRepository} from "../../model/repository/targets.repository";
import {isUndefined} from "util";

@Component({
  selector: "processing-estimate",
  moduleId: module.id,
  templateUrl: "estimate.component.html"
})

export class EstimateProcessingComponent implements OnInit {

  private id: number;
  private subscription: Subscription;
  rowGroupMetadata: any;
  _items: any[];

  constructor(private activateRoute: ActivatedRoute, private targetRepository: TargetsRepository) {
    this.subscription = activateRoute.params.subscribe(
      params => {
        this.id = params['id'];
        this._items = this.items();
      });
  }

  ngOnInit() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
      for (let i = 0; i < this._items.length; i++) {
        let rowData = this._items[i];
        let section = rowData.section;
        if (i == 0) {
          this.rowGroupMetadata[section] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = this._items[i - 1];
          let previousRowGroup = previousRowData.section;
          if (section === previousRowGroup)
            this.rowGroupMetadata[section].size++;
          else
            this.rowGroupMetadata[section] = { index: i, size: 1 };
        }
      }
  }

  items(): any[] {
    let result: any[] = [];

    //
    // this.target.building.sections.forEach(
    //   (sectionItem, index) => {
    //
    //     let section = sectionItem;
    //
    //     sectionItem.stages.forEach(
    //       (stage, indexStage) => {
    //         result.push(
    //           {
    //             section: section,
    //             stage: stage,
    //             count: 5,
    //             material: stage.material,
    //             service: stage.service,
    //             mechanism: stage.mechanism
    //           }
    //         )
    //       }
    //     )
    //   }
    // );

    console.log(result);

    return result;
  }

}
