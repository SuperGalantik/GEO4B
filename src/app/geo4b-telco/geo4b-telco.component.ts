import { Component } from '@angular/core';
import { MatAccordion, MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-geo4b-telco',
  standalone: true,
  imports: [RouterLink, MatAccordion, MatExpansionPanel, MatExpansionModule],
  templateUrl: './geo4b-telco.component.html',
  styleUrl: './geo4b-telco.component.css'
})
export class Geo4bTelcoComponent 
{
  public panelOpenState: boolean = false;
  public roadmapOpenState: boolean = false;
  
  constructor(private router: Router) {};

  onNavigateTo(path: string)
  {
    this.router.navigate([path]);
  };
}
