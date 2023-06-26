import { apiURLacompte } from './../../config';
import { Acompteprov } from './../../models/acompteprov.model';
import { User } from './../../models/User.model';

import { Injectable } from '@angular/core';

//Models
import { PersonnePhysique } from '../../models/personnePhysique.model';
import { PersonneMorale } from '../../models/personneMorale.model';
import { Patente } from '../../models/patente.model';

//API REST
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';



//Path
import { apiURLpersonne } from 'src/config';

//Route
import { Router } from '@angular/router';

// Important to know
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class DeclariService {

  constructor(private router: Router,
    //API REST
    private http: HttpClient) { }

    ajouterAcompte(a: Acompteprov): Observable<Acompteprov> {
      console.log("Ajouter Acompte");
      return this.http.post<Acompteprov>(apiURLacompte, a, httpOptions);
    }


    listeAcomptes(mail: string): Observable<Acompteprov[]> {
      const url = `${apiURLacompte}/all/${mail}`;
      return this.http.get<Acompteprov[]>(url);
    }
}
