"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(page, routerExtensions) {
        this.page = page;
        this.routerExtensions = routerExtensions;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    RegisterComponent.prototype.login = function () {
        this.routerExtensions.navigate(["/login"]);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'ns-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQixzREFBK0Q7QUFRL0Q7SUFFRSwyQkFBb0IsSUFBUyxFQUFVLGdCQUFpQztRQUFwRCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtJQUFJLENBQUM7SUFFN0Usb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFWVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBR3lCLFdBQUksRUFBMkIseUJBQWdCO09BRjdELGlCQUFpQixDQVk3QjtJQUFELHdCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtcmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6UGFnZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOlJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgbG9naW4oKSB7XG5cdFx0XHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICB9XG5cbn1cbiJdfQ==