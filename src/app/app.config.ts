import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { IMAGE_CONFIG } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})), 
    provideAnimations(),
    {
      provide: IMAGE_CONFIG,
      useValue: 
      {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    }, provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
