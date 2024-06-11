import { Component } from '@angular/core';
import { IsActiveMatchOptions, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatAccordion, MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';


@Component({
selector: 'app-geo4b-water',
standalone: true,
imports: [RouterLink, MatExpansionModule, RouterLinkActive],
templateUrl: './geo4b-water.component.html',
styleUrl: './geo4b-water.component.css'
})
export class Geo4bWaterComponent 
{
  public panelOpenState: boolean = false;
  public linkActiveOption: IsActiveMatchOptions = 
  {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    paths: 'exact',
    fragment: 'exact'
  }
  public roadmapOpenState: boolean = false;

  constructor(private router: Router) {};

  onNavigateTo(path: string)
  {
    this.router.navigate([path]);
  };
}
