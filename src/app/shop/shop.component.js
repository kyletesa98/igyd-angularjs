"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shop_service_1 = require("./shop.service");
var ShopComponent = /** @class */ (function () {
    function ShopComponent(shopService) {
        this.shopService = shopService;
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.shops = this.shopService.getShops();
    };
    ShopComponent = __decorate([
        core_1.Component({
            selector: 'ns-shop',
            templateUrl: './shop.component.html',
            styleUrls: ['./shop.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [shop_service_1.ShopService])
    ], ShopComponent);
    return ShopComponent;
}());
exports.ShopComponent = ShopComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCwrQ0FBNkM7QUFRN0M7SUFHRSx1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDO0lBRWpELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQVBVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBSWlDLDBCQUFXO09BSGpDLGFBQWEsQ0FTekI7SUFBRCxvQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2hvcCB9IGZyb20gXCIuL3Nob3BcIjtcbmltcG9ydCB7IFNob3BTZXJ2aWNlIH0gZnJvbSBcIi4vc2hvcC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXNob3AnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hvcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Nob3AuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBTaG9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2hvcHM6IFNob3BbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNob3BTZXJ2aWNlOiBTaG9wU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zaG9wcyA9IHRoaXMuc2hvcFNlcnZpY2UuZ2V0U2hvcHMoKTtcbiAgfVxuXG59XG4iXX0=