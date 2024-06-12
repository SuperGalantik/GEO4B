import { NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatAccordion, MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { Router, RouterLink, RouterLinkActive, IsActiveMatchOptions } from '@angular/router';


@Component({
  selector: 'app-geo4b-telco',
  standalone: true,
  imports: [RouterLink, MatAccordion, MatExpansionPanel, MatExpansionModule, RouterLinkActive, NgIf],
  templateUrl: './geo4b-telco.component.html',
  styleUrl: './geo4b-telco.component.css'
})
export class Geo4bTelcoComponent implements OnInit
{
  public panelOpenState: boolean = false;
  public roadmapOpenState: boolean = false;
  
  public displayOffcanvasTemplate: boolean = false;
  public innerWidth!: number;
  
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
