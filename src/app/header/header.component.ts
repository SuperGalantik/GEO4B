import { Component } from '@angular/core';
import { MatMenuModule, MatMenuPanel } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel, MatSelect } from '@angular/material/select';
import { MenuService } from '../menu-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MatButtonModule, MatMenuModule, MatOption, MatSelect, MatLabel, MatFormField, RouterLink],

})
export class HeaderComponent 
{
  menuOpen = false;

  selected!: boolean;
  chiamaci!: MatMenuPanel<any> | null;

  constructor(private menuService: MenuService, private router: Router) {};
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  setSelectedMenu(product: string)
  {
    this.menuService.setSelectedMenu(product);
    console.log('/' + this.menuService.selectedMenu);
    this.router.navigate(['/' + this.menuService.selectedMenu]);
  }

  onFadeDropDown(): void
  {
    
  }
}
