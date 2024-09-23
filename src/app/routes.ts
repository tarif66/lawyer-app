import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientsComponent } from './clients/clients.component';
import { AffairesComponent } from './affaires/affaires.component';
import { CabinetComponent } from './cabinet/cabinet.component';

const routeConfig: Routes = [
    {
        path: '',
        component: AccueilComponent,
        title: 'Accueil'
    },
    {
        path: 'clients',
        component: ClientsComponent,
        title: 'Clients'
    },
    {
        path: 'affaires',
        component: AffairesComponent,
        title: 'Affaires'
    },
    {
        path: 'cabinet',
        component: CabinetComponent,
        title: 'Cabinet'
    }
];

export default routeConfig;
