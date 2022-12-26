import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { PersonneMorale } from './../../models/personneMorale.model';
import { PersonnePhysique } from './../../models/personnePhysique.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-morale',
  templateUrl: './sign-up-morale.component.html',
  styleUrls: ['./sign-up-morale.component.css']
})
export class SignUpMoraleComponent implements OnInit {

  personnePhysique = new PersonnePhysique();
  personneMorale = new PersonneMorale();

  constructor(private authService : AuthService,
    private router: Router,) { }

  ngOnInit(): void {
  }

}
