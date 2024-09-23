import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { SidenavDrawerOverviewExample } from './app/sidenav-drawer-overview-example/sidenav-drawer-overview-example.component';
import {importProvidersFrom} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));

bootstrapApplication(SidenavDrawerOverviewExample, {
    providers: [
      provideAnimations(),
      provideHttpClient(),
      importProvidersFrom(MatNativeDateModule),
      provideRouter(routeConfig)
    ]
  }).catch(err => console.error(err));
  


