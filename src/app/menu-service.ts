import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class MenuService
{
    public selectedMenu: string = "";

    public setSelectedMenu(product: string)
    {
        this.selectedMenu = product;
    }
}