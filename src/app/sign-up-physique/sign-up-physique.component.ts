import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { PersonneMorale } from './../../models/personneMorale.model';
import { PersonnePhysique } from './../../models/personnePhysique.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-physique',
  templateUrl: './sign-up-physique.component.html',
  styleUrls: ['./sign-up-physique.component.css']
})
export class SignUpPhysiqueComponent implements OnInit {

  public loginValid = true;

  newPersonnePhysique = new PersonnePhysique();
  personneMorale = new PersonneMorale();

  newUser = new PersonnePhysique();

  constructor(private authService : AuthService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  /*
  {

    "nom" : "ahmed",
    "prenom" : "jedidi",
    "dateDeNaissance" : "1652-12-12",
    "cin" : "123456789",
    "telephone" : "55555555",
    "adresse" : "Atlantis",
    "email" : "ahmedjedidi1@gmail.com",
    "motDePasse" : "ahmedjedidi1"

  }
  */
  /////////////////////////////////////////////////////////////////////
  addUser() {
        this.loginValid = true;
          console.log(this.newUser);
         this.authService.ajouterUser(this.newUser).subscribe((usr: any) => { 
          
          console.log(usr); 
        
          if(usr == 201){
            this.loginValid = false;
            //this.router.navigate(['/users']);
            setTimeout(() => {this.router.navigate(['/login'],)}, 70);
            /*this.router.navigate(['/users']).then(() => {
                                                        window.location.reload();
                                                      });*/
          }                                 
        });

        if(this.loginValid != true){
          this.loginValid == true;
        }else{
          this.loginValid = false;
        }
        
   }
   /////////////////////////////////////////////////////////////////////

}
