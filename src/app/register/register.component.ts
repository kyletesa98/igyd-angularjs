import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  moduleId: module.id,
})
export class RegisterComponent implements OnInit {

  constructor(private page:Page, private routerExtensions:RouterExtensions) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  login() {
				this.routerExtensions.navigate(["/login"]);
  }

}
