import { Component, Inject, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { MenuService } from '../menu-service';
import { Geo4bWaterComponent } from "../geo4b-water/geo4b-water.component";
import { Geo4bTelcoComponent } from "../geo4b-telco/geo4b-telco.component";
import { NgClass } from '@angular/common';
import { Subscriber, Subscription } from 'rxjs';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [RouterLink, RouterOutlet, Geo4bWaterComponent, Geo4bTelcoComponent, NgClass]
})
export class SidebarComponent implements OnInit, OnDestroy
{
  subscription!: Subscription;

  constructor(public menuService: MenuService, public router: Router, public activatedRoute: ActivatedRoute) {};

  ngOnInit(): void 
  {

  }

  ngOnDestroy(): void 
  {
    this.subscription.unsubscribe();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log(route.url);
    return true;
  }
}
