import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, ElementRef, Host, HostListener, OnInit, ViewChild } from '@angular/core';
import { event } from 'jquery';

@Component({
  selector: 'app-telco-funzioni',
  standalone: true,
  imports: [CdkVirtualScrollViewport],
  templateUrl: './telco-funzioni.component.html',
  styleUrl: './telco-funzioni.component.css'
})
export class TelcoFunzioniComponent 
{
  constructor() {};
}
