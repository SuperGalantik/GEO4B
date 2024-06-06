import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-geo4b-water',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './geo4b-water.component.html',
  styleUrl: './geo4b-water.component.css'
})
export class Geo4bWaterComponent 
{
  constructor(private router: Router) {};

  onNavigateTo(path: string)
  {
    this.router.navigate([path]);
  };
}
