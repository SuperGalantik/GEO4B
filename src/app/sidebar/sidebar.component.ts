import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, GuardResult, MaybeAsync, NavigationEnd, Router, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { MenuService } from '../menu-service';
import { Geo4bWaterComponent } from "../geo4b-water/geo4b-water.component";
import { Geo4bTelcoComponent } from "../geo4b-telco/geo4b-telco.component";
import { NgClass } from '@angular/common';
import { Subscription, filter } from 'rxjs';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [RouterLink, RouterOutlet, Geo4bWaterComponent, Geo4bTelcoComponent, NgClass]
})
export class SidebarComponent implements OnInit
{
  path!: string;

  constructor(public menuService: MenuService, public router: Router, public activatedRoute: ActivatedRoute) {};

  ngOnInit(): void 
  {
  
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log(route.url);
    return true;
  }
}
