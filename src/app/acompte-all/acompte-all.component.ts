import { Component, OnInit } from '@angular/core';
import { DeclariService } from './../services/declari.service';
import { Acompteprov } from './../../models/acompteprov.model';
import { Acompte } from './../../models/acompte.model';
import { Router } from '@angular/router';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

interface INumber {
  parseFloat: Function
}
declare var Number: INumber;

@Component({
  selector: 'app-acompte-all',
  templateUrl: './acompte-all.component.html',
  styleUrls: ['./acompte-all.component.css']
})
export class AcompteAllComponent implements OnInit {

  acomptes !: Acompteprov[];
  mail!: string;
  

  constructor(private router: Router, public declariService : DeclariService) { }

  ngOnInit(): void {
    this.mail = localStorage.getItem('loggedPersonne')!.toString();
    this.declariService.listeAcomptes(this.mail).subscribe(acs => { this.acomptes = acs; console.log(acs)});
    
  }

}
