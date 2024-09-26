import { Affaire } from './affaire';
import { Client } from './client';

export interface Document {
    id: number,
    title: string,
    type: string,
    creationDate: string,
    affaires: Affaire[],
    clients: Client[]
}
