import { Patente } from './patente.model';
export class PersonnePhysique{
    _id !: string;
    nom !: string;
    prenom !: string;
    dateDeNaissance !: string;
    cin !: string;
    telephone !: string;
    adresse !: string;
    email !: string;
    motDePasse !: string;
    patente !: Patente; //[]
}