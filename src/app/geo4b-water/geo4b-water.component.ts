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

  /* interfaccia per implementazione della evidenziazione del paragrafo selezionato */
  public linkActiveOption: IsActiveMatchOptions = 
  {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    paths: 'exact',
    fragment: 'exact'
  }

  constructor(private router: Router) {};

  /* listener per un eventuale ridimensionamento della finestra e per decisione della visualizzazione dell'offcanvas sidebar */
  @HostListener('window:resize', ['$event'])
  onResize() 
  {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth>1000)
      this.displayOffcanvasTemplate = false;
    else
      this.displayOffcanvasTemplate = true
  }

  /* controllo iniziale di un eventuale ridimensionamento */
  ngOnInit(): void 
  {
    this.onResize();
  }

  /* metodo per controllo del click dei pulsanti */
  onNavigateTo(path: string)
  {
    this.router.navigate([path]);
  };

  /* controllo rotazione della freccia dell'eventuale offcanvas menù*/
  isRotated = false;

  toggleRotation() {
    this.isRotated = !this.isRotated;
  }
}
