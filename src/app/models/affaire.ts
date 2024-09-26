import { Client } from './client';
import { Document } from './document';

export interface Affaire {
    id: number,
    type: string,
    tribunal: string,
    creationDate: string,
    clients: Client[],
    documents: Document[]
}
