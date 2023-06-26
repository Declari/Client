import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { User } from 'src/models/User.model'; 

//ERROR TEST
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//ERROR TEST

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public loginValid = true;

  user = new User();
  
  constructor(private authService : AuthService,
              private router: Router,) { }

  ngOnInit(): void {
  }


//  onLoggedin() {
//
//    this.authService.login(this.user).subscribe((o: Any) => {
//
//      if ( o.token){
//
//      }
///*if (usr == null){console.log("faux");  this.erreur = 1;}
//else{
//      
//        
//      console.log(usr);
//}
//    }, (err) =>{ console.log(err);  this.erreur = 1;}  );
//  s}*/
//
//  })
//
//}



  /////////////////////////////////////////////////////////////////////////
  onLoggedin() {

    this.loginValid = true;

        //this.authService.login(this.user);
        this.authService.login(this.user).subscribe((o: any) => {
          console.log(o.status);
          if (o.status == 200){
            this.loginValid = false;
            //this.router.navigate(['/']);
            this.authService.SignIn(this.user.email);
            
        setTimeout(() => {this.router.navigate(['/home/declari'],)}, 1);
          }
        });

        if(this.loginValid != true){
          this.loginValid == true;
        }else{
          this.loginValid = false;
        }
  }
/////////////////////////////////////////////////////////////////////////


}