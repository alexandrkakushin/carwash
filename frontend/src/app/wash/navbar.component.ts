
import {Component, OnInit} from "@angular/core";
import {AuthService} from "../model/datasource/auth.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import 'rxjs/add/operator/finally';

@Component( {
  selector: "navbar",
  moduleId: module.id,
  templateUrl: "navbar.component.html"
})

export class NavbarComponent {

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {
    // if (!this.authService.authenticated) {
    //   this.logout();
    // }
  }

  logout() {
    this.http.post('logout', {}).finally(() => {
      this.authService.authenticated = false;
      this.router.navigateByUrl('/carwash/login');
    }).subscribe();
  }

  isAuthenticated(): boolean {
    return this.authService.authenticated;
  }

}
