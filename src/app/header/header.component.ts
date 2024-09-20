import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <section class="header">
      <div class="app-title">
        Laywer App
      </div>     
    </section>
      `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
