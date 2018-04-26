
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "refresh",
  moduleId: module.id,
  template: "<p>refresh</p>"
})

export class RefreshComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if (params['url']) {
          this.router.navigateByUrl(params['url']);
        }
      })
  }
}
