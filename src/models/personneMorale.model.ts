import { Patente } from './patente.model';
export class PersonneMorale{
    _id !: string;
    raisonSocial !: string;
    telephone !: string;
    adresse !: string;
    email !: string;
    motDePasse !: string;
    patente !: Patente; //[]
}