import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterLink, RouterLinkActive, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { MenuService } from '../menu-service';
import { Geo4bWaterComponent } from "../geo4b-water/geo4b-water.component";
import { Geo4bTelcoComponent } from "../geo4b-telco/geo4b-telco.component";
import { NgClass, NgIf } from '@angular/common';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [RouterLink, RouterOutlet, Geo4bWaterComponent, Geo4bTelcoComponent, NgClass, MatSidenavModule, MatGridListModule, RouterLinkActive, NgIf]
})
export class SidebarComponent
{
  path!: string;
  
  public displayOffcanvasTemplate: boolean = false;
  public innerWidth!: number;

  constructor(public menuService: MenuService, public router: Router, public activatedRoute: ActivatedRoute) {};
}
