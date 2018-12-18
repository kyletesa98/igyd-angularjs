import { Injectable } from '@angular/core';

import { Shop } from './shop';

@Injectable()
export class ShopService {
  private shops = new Array<Shop>(
    {id: 1, name: "Coffee Project", backgroundImage: "~/images/shops/cp/cp_bg.jpg", logo: "~/images/cp/cp_logo.png"},
    {id: 2, name: "Dunkin' Donuts", backgroundImage: "~/images/shops/dd/dd_bg.jpg", logo: "~/images/dd/dd_logo.png"},
    {id: 3, name: "J.CO Donuts & Coffee", backgroundImage: "~/images/shops/jco/jco_bg.jpg", logo: "~/images/jco/jco_logo.png"},
    {id: 4, name: "Starbucks", backgroundImage: "~/images/shops/sb/sb_bg.jpg", logo: "~/images/jco/sb_logo.png"},
  );

  getShops(): Shop[] {
    return this.shops;
  }

  getShop(id: number): Shop {
    return this.shops.filter(shop => shop.id === id)[0];
  }
}
