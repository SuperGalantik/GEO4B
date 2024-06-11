import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Router, RouterLink, RouterOutlet, Scroll } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { Subscription, filter } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from "./home/home.component";
import { MatGridList } from '@angular/material/grid-list';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent, RouterLink, HomeComponent]
})
export class AppComponent implements OnInit, OnDestroy
{
  title = 'GEO4B';
  subscription!: Subscription;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {};
  
  /*   
  onClick(product: string)
  {
    if(product==="water")
      this.router.navigate(["product_guide", "geo4bwater"]);
    else
      this.router.navigate(["product_guide", "geo4btelco"]);   
  } 
  */
 
  ngOnInit(): void 
  {
    this.subscription = this.router.events.pipe
    (
      filter(event => event instanceof Scroll)
    ).subscribe((event: any) => 
      {
        if (event.anchor) 
        {
          setTimeout(() => 
          {
            this.viewportScroller.scrollToAnchor(event.anchor);
          });
        }
      }
    );
  }
  
  ngOnDestroy(): void 
  {
    this.subscription.unsubscribe();
  }

  onClick()
  {
    if(document.getElementById('offcanvas-toggler')?.classList.contains('off-canvas-toggler-active') && document.getElementById('offcanvas_img_toggler')?.classList.contains('offcanvas_half-circle_toggler-active'))
    {
      document.getElementById('offcanvas-toggler')?.classList.remove('off-canvas-toggler-active');
      document.getElementById('offcanvas_img_toggler')?.classList.remove('offcanvas_half-circle_toggler-active');
    }
    else
    {
      document.getElementById('offcanvas-toggler')?.classList.add('off-canvas-toggler-active');
      document.getElementById('offcanvas_img_toggler')?.classList.add('offcanvas_half-circle_toggler-active');
    }
  }
}
