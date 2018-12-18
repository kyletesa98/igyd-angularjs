import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  constructor(private page:Page, private routerExtensions:RouterExtensions) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  submit() {
				this.routerExtensions.navigate(["/shop"]);
  }

  goRegister() {
				this.routerExtensions.navigate(["/register"]);
  }
}