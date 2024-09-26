import { Document } from './document';
import { Affaire } from './affaire';

export interface Client {
    id: number,
    name: string,
    city: string,
    state: string,
    picture: string,
    creationDate: string,
    lastMeeting: string,
    affaires: Affaire[],
    description: string,
}
