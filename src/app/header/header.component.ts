import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatMenuModule, MatMenuPanel } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel, MatSelect } from '@angular/material/select';
import { MenuService } from '../menu-service';
import { Router, RouterLink } from '@angular/router';
import $ from 'jquery';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MatButtonModule, MatMenuModule, MatOption, MatSelect, MatLabel, MatFormField, RouterLink, NgIf, NgClass],

})
export class HeaderComponent 
{
  menuOpen = false;
  isAnimating = false;
  selected!: boolean;
  chiamaci!: any;

  // Aggiungiamo una variabile booleana per tracciare lo stato di apertura delle sottovoci
  submenuOpen = false;
  selectedMenuItem: any;
  isMouseInsideNavbar: any;

  constructor(private menuService: MenuService, private router: Router, public element: ElementRef) {}

  //metodo per l'apertura o la chiusura di un menù burger
  toggleMenu() 
  {
    this.menuOpen = !this.menuOpen;
  }

  // Metodo per chiudere tutti i sottomenu aperti
  closeAllSubmenus() {
    const openSubmenus = document.querySelectorAll('.navbar .dropdown-menu.show');
    if (openSubmenus.length === 0) {
      this.submenuOpen = false;
      return;
    }

    this.submenuOpen = false;
    openSubmenus.forEach((submenu: Element) => {
      submenu.classList.remove('show');
      const dropdownToggle = submenu.previousElementSibling;
      if (dropdownToggle) {
        dropdownToggle.classList.remove('show');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Metodo per gestire l'apertura/chiusura del sottomenu
  onFadeDropDown(elemRef: string) {
    if (this.isAnimating) {
      return;
    }

    const listContainer = document.getElementById(`${elemRef}List`);
    const dropdownToggle = document.getElementById(elemRef);
    if (!listContainer || !dropdownToggle) {
      return;
    }

    this.isAnimating = true;
    listContainer.classList.add('show');
    dropdownToggle.classList.add('show');
    dropdownToggle.setAttribute('aria-expanded', 'true');
    this.isAnimating = false;
  }

  //metodo per gestire l'uscita del cursore dalla navbar
  onMouseLeaveNavbar(elemRef: string): void
  {
    const listContainer = document.getElementById(`${elemRef}List`);
    const dropdownToggle = document.getElementById(elemRef);

    if (!listContainer || !dropdownToggle) {
      return;
    }

    listContainer.classList.remove('show');
    dropdownToggle.classList.remove('show');
    dropdownToggle.setAttribute('aria-expanded', 'false');
    this.isAnimating = false;
  }

  //metodo per gestione apertura o chiusura menù burger (schermo piccolo)
  toggleNavbar() { $('#navbar-toggler').toggleClass('open'); }
}

