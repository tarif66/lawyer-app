import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidenavDrawerOverviewExample } from './sidenav-drawer-overview-example/sidenav-drawer-overview-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidenavDrawerOverviewExample],
  template: `
    <app-header></app-header>
    <sidenav-drawer-overview-example></sidenav-drawer-overview-example>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lawyer-app';
}
