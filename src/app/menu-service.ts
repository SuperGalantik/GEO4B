import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class MenuService
{
    //servizio per la gestione del prodotto selezionato
    public selectedMenu: string = "";

    public setSelectedMenu(product: string)
    {
        this.selectedMenu = product;
    }
}