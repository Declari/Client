import { PersonnePhysique } from './../../models/personnePhysique.model';
import { PersonneMorale } from './../../models/personneMorale.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  public loginValid = true;

  personnePhysique = new PersonnePhysique();
  personneMorale = new PersonneMorale();

  constructor() { }

  ngOnInit(): void {
  }

}
