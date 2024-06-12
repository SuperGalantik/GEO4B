import { Component, HostListener, OnInit } from '@angular/core';
import { IsActiveMatchOptions, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { NgIf } from '@angular/common';


@Component({
selector: 'app-geo4b-water',
standalone: true,
imports: [RouterLink, MatExpansionModule, RouterLinkActive, NgIf],
templateUrl: './geo4b-water.component.html',
styleUrl: './geo4b-water.component.css'
})
export class Geo4bWaterComponent implements OnInit
{
  public displayOffcanvasTemplate: boolean = false;
  public innerWidth!: number;
  
  public panelOpenState: boolean = false;
  public roadmapOpenState: boolean = false;
  public linkActiveOption: IsActiveMatchOptions = 
  {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    paths: 'exact',
    fragment: 'exact'
  }

  constructor(private router: Router) {};

  @HostListener('window:resize', ['$event'])
  onResize() 
  {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth>1000)
      this.displayOffcanvasTemplate = false;
    else
      this.displayOffcanvasTemplate = true
  }

  ngOnInit(): void 
  {
    this.onResize();
  }

  onNavigateTo(path: string)
  {
    this.router.navigate([path]);
  };
}
