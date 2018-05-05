import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AuthService} from "../../model/datasource/auth.service";
import {Message} from "primeng/api";

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  msgs: Message[] = [];

  credentials = {username: '', password: ''};

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.authService.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/carwash');
    });
    this.subscribeMessages();
    // return false;
  }

  private subscribeMessages(): void {
    this.authService.getMessages().subscribe(
      data => {
        this.msgs = data;
      }
    );
  }
}
