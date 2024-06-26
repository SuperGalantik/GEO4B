import { Component } from '@angular/core';
import { MenuService } from '../menu-service';
import { IsActiveMatchOptions, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent 
{
  constructor(public menuService: MenuService, public router: Router) {};
  
  public linkActiveOption: IsActiveMatchOptions = 
  {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    paths: 'exact',
    fragment: 'exact'
  }

  /* metodo per la navigazione a route specifiche alla pressione dei bottoni */
  onNavigateTo(product: string)
  {
    if(product == 'telco')
    {
      this.menuService.setSelectedMenu('geo4btelco');
      this.router.navigate(['/geo4btelco']);
    }

    else if(product == 'water')
    {
      this.menuService.setSelectedMenu('geo4bwater');
      this.router.navigate(['/geo4bwater']);
    }

  }
}
