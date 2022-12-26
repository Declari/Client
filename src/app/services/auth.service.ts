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

export class AuthService {

  //API REST
  //apiURL: string = 'http://localhost:8085/userBackEnd/api/all';
  apiURLlogin: string = apiURLpersonne+'physique/signin';


  personnePhysiques !: PersonnePhysique; //un tableau des PersonnePhysique
  PersonneMorale !: PersonneMorale; //un tableau des PersonneMorale

  patente !: Patente[];


  //Local Personnes Data
  public loggedPersonne !: string;
  public isloggedIn: Boolean = false;
  public PhysiqueOuMorale !: string;


  constructor(private router: Router,
    //API REST
    private http: HttpClient) { }

    

    login(user : User)
    {
    return this.http.post<string>(/*this.apiURLlogin*/"http://localhost:3700/api/physique/signin", user , {observe:'response'});
    }

    ajouterUser(usr: PersonnePhysique): Observable<PersonnePhysique> {
      return this.http.post<PersonnePhysique>("http://localhost:3700/api/physique/signup", usr, httpOptions);
    }

}
