
import {finalize} from 'rxjs/operators';

import {Component, OnInit} from "@angular/core";
import {AuthService} from "../model/datasource/auth.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";


@Component( {
  selector: "navbar",
  moduleId: module.id,
  templateUrl: "navbar.component.html"
})

export class NavbarComponent {

  items: MenuItem[];

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {
    // if (!this.authService.authenticated) {
    //   this.logout();
    // }
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Справочники',
        icon: 'fa fa-fw fa-file',
        items: [{
          label: 'Номенклатура',
          items: [
            {label: 'Материалы', routerLink: '/carwash/catalogs/materials'},
            {label: 'Механизмы', routerLink: '/carwash/catalogs/mechanisms'},
            {label: 'Работы', routerLink: '/carwash/catalogs/services'},
            {separator:true},
            {label: 'Комплекты', routerLink: '/carwash/catalogs/kits'}
          ]
        },
          {label: 'Единицы измерения', routerLink: '/carwash/catalogs/units'},
          {label: 'Города', routerLink: '/carwash/catalogs/cities'},
          {separator:true},
          {label: 'Контрагенты', routerLink: '/carwash/catalogs/contractors'},
          {label: 'Группы контрагентов', routerLink: '/carwash/catalogs/groupscontractor'}
        ]
      },
      {
        label: 'Администрирование', routerLink: '/carwash/admin'
      }
    ];
  }

  logout() {
    this.http.post('logout', {}).pipe(finalize(() => {
      this.authService.authenticated = false;
      this.router.navigateByUrl('/carwash/login');
    })).subscribe();
  }

  isAuthenticated(): boolean {
    return this.authService.authenticated;
  }
}
