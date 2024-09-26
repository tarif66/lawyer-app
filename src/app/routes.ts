import { Routes } from '@angular/router';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { AffairesPageComponent } from './affaires-page/affaires-page.component';
import { CabinetPageComponent } from './cabinet-page/cabinet-page.component';

const routeConfig: Routes = [
    {
        path: '',
        component: AccueilPageComponent,
        title: 'Accueil'
    },
    {
        path: 'clients',
        component: ClientsPageComponent,
        title: 'Clients'
    },
    {
        path: 'affaires',
        component: AffairesPageComponent,
        title: 'Affaires'
    },
    {
        path: 'cabinet',
        component: CabinetPageComponent,
        title: 'Cabinet'
    }
];

export default routeConfig;
