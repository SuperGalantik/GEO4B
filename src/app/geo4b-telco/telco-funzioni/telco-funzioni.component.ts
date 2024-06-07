import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component } from '@angular/core';

@Component({
  selector: 'app-telco-funzioni',
  standalone: true,
  imports: [CdkVirtualScrollViewport],
  templateUrl: './telco-funzioni.component.html',
  styleUrl: './telco-funzioni.component.css'
})
export class TelcoFunzioniComponent 
{
  // Sanitize pipe is for load the svg right arrow icon, it would give an error of html sanitizing if trying to load it normally
  constructor() {};
}
