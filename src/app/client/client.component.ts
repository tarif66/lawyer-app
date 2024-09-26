import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../models/client';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule],
  template: `
    <mat-card class="example-card" appearance="outlined">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{client.name}}</mat-card-title>
        <mat-card-subtitle>{{client.city}}, {{client.state}}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src={{client.picture}} alt="Photo of a Shiba Inu">
      <mat-card-content>
        <p>{{client.description}}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>SEE DETAILS</button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrl: './client.component.css'
})
export class ClientComponent {
  @Input() client!:Client;
}
