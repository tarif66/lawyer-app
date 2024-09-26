import { Component } from '@angular/core';
import { Client } from '../models/client';
import { ClientComponent } from '../client/client.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-page',
  standalone: true,
  imports: [ClientComponent, CommonModule],
  template: `
    <section class="results">
      <app-client *ngFor="let client of clientList" [client]="client">
      </app-client>
    </section>
  `,
  styleUrls: ['./clients-page.component.css']
})
export class ClientsPageComponent {
  clientList: Client[] = [
    {
      "id": 1,
      "name": "John Doe",
      "city": "New York",
      "state": "NY",
      "picture": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "creationDate": "2018-01-01",
      "lastMeeting": "2019-01-01",
      "affaires": [],
      "description": "John is a very important client."
    },
    {
      "id": 2, // Changed to a unique ID
      "name": "Jane Smith",
      "city": "Los Angeles",
      "state": "CA",
      "picture": "https://material.angular.io/assets/img/examples/shiba1.jpg",
      "creationDate": "2019-02-01",
      "lastMeeting": "2020-02-01",
      "affaires": [],
      "description": "Jane is not a very important client, but she is nice."
    }  
  ]
  list(){
    if (this.clientList) {
      console.log(this.clientList);
    } else {
      console.log('clientList is undefined');
    }
  }
}


