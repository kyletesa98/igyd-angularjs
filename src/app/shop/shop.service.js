"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ShopService = /** @class */ (function () {
    function ShopService() {
        this.shops = new Array({ id: 1, name: "Coffee Project", backgroundImage: "~/images/shops/cp/cp_bg.jpg", logo: "~/images/cp/cp_logo.png" }, { id: 2, name: "Dunkin' Donuts", backgroundImage: "~/images/shops/dd/dd_bg.jpg", logo: "~/images/dd/dd_logo.png" }, { id: 3, name: "J.CO Donuts & Coffee", backgroundImage: "~/images/shops/jco/jco_bg.jpg", logo: "~/images/jco/jco_logo.png" }, { id: 4, name: "Starbucks", backgroundImage: "~/images/shops/sb/sb_bg.jpg", logo: "~/images/jco/sb_logo.png" });
    }
    ShopService.prototype.getShops = function () {
        return this.shops;
    };
    ShopService.prototype.getShop = function (id) {
        return this.shops.filter(function (shop) { return shop.id === id; })[0];
    };
    ShopService = __decorate([
        core_1.Injectable()
    ], ShopService);
    return ShopService;
}());
exports.ShopService = ShopService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDO0lBREE7UUFFVSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3ZCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLDZCQUE2QixFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBQyxFQUNoSCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUMsRUFDaEgsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsK0JBQStCLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFDLEVBQzFILEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUMsQ0FDN0csQ0FBQztJQVNKLENBQUM7SUFQQyw4QkFBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFkVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBZXZCO0lBQUQsa0JBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2hvcCB9IGZyb20gJy4vc2hvcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaG9wU2VydmljZSB7XG4gIHByaXZhdGUgc2hvcHMgPSBuZXcgQXJyYXk8U2hvcD4oXG4gICAge2lkOiAxLCBuYW1lOiBcIkNvZmZlZSBQcm9qZWN0XCIsIGJhY2tncm91bmRJbWFnZTogXCJ+L2ltYWdlcy9zaG9wcy9jcC9jcF9iZy5qcGdcIiwgbG9nbzogXCJ+L2ltYWdlcy9jcC9jcF9sb2dvLnBuZ1wifSxcbiAgICB7aWQ6IDIsIG5hbWU6IFwiRHVua2luJyBEb251dHNcIiwgYmFja2dyb3VuZEltYWdlOiBcIn4vaW1hZ2VzL3Nob3BzL2RkL2RkX2JnLmpwZ1wiLCBsb2dvOiBcIn4vaW1hZ2VzL2RkL2RkX2xvZ28ucG5nXCJ9LFxuICAgIHtpZDogMywgbmFtZTogXCJKLkNPIERvbnV0cyAmIENvZmZlZVwiLCBiYWNrZ3JvdW5kSW1hZ2U6IFwifi9pbWFnZXMvc2hvcHMvamNvL2pjb19iZy5qcGdcIiwgbG9nbzogXCJ+L2ltYWdlcy9qY28vamNvX2xvZ28ucG5nXCJ9LFxuICAgIHtpZDogNCwgbmFtZTogXCJTdGFyYnVja3NcIiwgYmFja2dyb3VuZEltYWdlOiBcIn4vaW1hZ2VzL3Nob3BzL3NiL3NiX2JnLmpwZ1wiLCBsb2dvOiBcIn4vaW1hZ2VzL2pjby9zYl9sb2dvLnBuZ1wifSxcbiAgKTtcblxuICBnZXRTaG9wcygpOiBTaG9wW10ge1xuICAgIHJldHVybiB0aGlzLnNob3BzO1xuICB9XG5cbiAgZ2V0U2hvcChpZDogbnVtYmVyKTogU2hvcCB7XG4gICAgcmV0dXJuIHRoaXMuc2hvcHMuZmlsdGVyKHNob3AgPT4gc2hvcC5pZCA9PT0gaWQpWzBdO1xuICB9XG59XG4iXX0=