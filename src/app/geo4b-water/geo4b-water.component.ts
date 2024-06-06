import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatAccordion, MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-geo4b-water',
  standalone: true,
  imports: [RouterLink, MatExpansionModule],
  templateUrl: './geo4b-water.component.html',
  styleUrl: './geo4b-water.component.css'
})
export class Geo4bWaterComponent 
{
  public panelOpenState: boolean = false;
  public roadmapOpenState: boolean = false;

  constructor(private router: Router) {};

  onNavigateTo(path: string)
  {
    this.router.navigate([path]);
  };
}
