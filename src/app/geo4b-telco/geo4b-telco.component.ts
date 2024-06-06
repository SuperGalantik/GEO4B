import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-geo4b-telco',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './geo4b-telco.component.html',
  styleUrl: './geo4b-telco.component.css'
})
export class Geo4bTelcoComponent 
{
  constructor(private router: Router) {};

  onNavigateTo(path: string)
  {
    this.router.navigate([path]);
  };
}
