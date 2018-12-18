import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  moduleId: module.id,
})
export class FirstComponent implements OnInit {

  constructor(private page:Page, private routerExtensions:RouterExtensions) { }

  ngOnInit() {
  }

  goRegister() {
				this.routerExtensions.navigate(["/register"]);
  }

  login() {
				this.routerExtensions.navigate(["/login"]);
  }

}
