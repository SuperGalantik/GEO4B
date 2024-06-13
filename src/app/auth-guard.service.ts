import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { MenuService } from "./menu-service";

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate
{
    constructor(public menuService: MenuService) {};

    /* metodo per la gestione delle route  */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult>
    {
        console.log(route.url[0].path);
        this.menuService.setSelectedMenu(route.url[0].path);
        return true;
    }
}