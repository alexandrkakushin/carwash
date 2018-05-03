
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Contractor} from "../../model/contractor.model";
import {ContractorsRepository} from "../../model/repository/contractors.repository";

@Component({
  selector: "prices",
  moduleId: module.id,
  templateUrl: "prices.component.html"
})

export class PricesComponent implements OnInit {

  // idContractor: number;
  //
  // constructor(private activitedRoute: ActivatedRoute,
  //             private contractorsRepository: ContractorsRepository) {
  // }
  //
  ngOnInit(): void {
    // this.idContractor = this.activitedRoute.snapshot.queryParams['id'];
  }
  //
  // get contractors(): Contractor[] {
  //   return this.contractorsRepository.items();
  // }
}
