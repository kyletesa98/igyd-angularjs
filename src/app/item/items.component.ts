import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private page:Page) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.items = this.itemService.getItems();
    }
}