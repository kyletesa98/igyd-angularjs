import { Component, OnInit } from '@angular/core';

import { Shop } from "./shop";
import { ShopService } from "./shop.service";

@Component({
  selector: 'ns-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  moduleId: module.id,
})
export class ShopComponent implements OnInit {
  shops: Shop[];

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.shops = this.shopService.getShops();
  }

}
