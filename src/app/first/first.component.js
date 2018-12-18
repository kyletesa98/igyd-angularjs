"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var FirstComponent = /** @class */ (function () {
    function FirstComponent(page, routerExtensions) {
        this.page = page;
        this.routerExtensions = routerExtensions;
    }
    FirstComponent.prototype.ngOnInit = function () {
    };
    FirstComponent.prototype.goRegister = function () {
        this.routerExtensions.navigate(["/register"]);
    };
    FirstComponent.prototype.login = function () {
        this.routerExtensions.navigate(["/login"]);
    };
    FirstComponent = __decorate([
        core_1.Component({
            selector: 'ns-first',
            templateUrl: './first.component.html',
            styleUrls: ['./first.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlyc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQixzREFBK0Q7QUFRL0Q7SUFFRSx3QkFBb0IsSUFBUyxFQUFVLGdCQUFpQztRQUFwRCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtJQUFJLENBQUM7SUFFN0UsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBYlUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FHeUIsV0FBSSxFQUEyQix5QkFBZ0I7T0FGN0QsY0FBYyxDQWUxQjtJQUFELHFCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1maXJzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maXJzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpcnN0LmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgRmlyc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTpQYWdlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6Um91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnb1JlZ2lzdGVyKCkge1xuXHRcdFx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3JlZ2lzdGVyXCJdKTtcbiAgfVxuXG4gIGxvZ2luKCkge1xuXHRcdFx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgfVxuXG59XG4iXX0=