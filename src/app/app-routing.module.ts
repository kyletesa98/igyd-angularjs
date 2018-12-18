import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { RegisterComponent } from './register/register.component';
import { FirstComponent } from './first/first.component';


const routes: Routes = [
    { path: "", redirectTo: "/first", pathMatch: "full" },
    { path: "first", component: FirstComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "shop", component: ShopComponent},
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }