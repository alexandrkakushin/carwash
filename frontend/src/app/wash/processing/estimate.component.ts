
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

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

  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit() {
    this.updateRowGroupMetaData();
    this._items = this.items();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
      for (let i = 0; i < this.items().length; i++) {
        let rowData = this.items()[i];
        let section = rowData.section;
        if (i == 0) {
          this.rowGroupMetadata[section] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = this.items()[i - 1];
          let previousRowGroup = previousRowData.section;
          if (section === previousRowGroup)
            this.rowGroupMetadata[section].size++;
          else
            this.rowGroupMetadata[section] = { index: i, size: 1 };
        }
      }
  }


  items(): any[] {
    return [
      {section: "Секция 1", stage: "Раздел 1", count: 5, material: "Песок", service: "Доставка", mechanism: "Машина"}
    ];
  }
}
