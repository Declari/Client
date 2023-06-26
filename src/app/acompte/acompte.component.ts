import { DeclariService } from './../services/declari.service';
import { Acompteprov } from './../../models/acompteprov.model';
import { Acompte } from './../../models/acompte.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-acompte',
  templateUrl: './acompte.component.html',
  styleUrls: ['./acompte.component.css']
})
export class AcompteComponent implements OnInit {

  a = new Acompteprov;
  acompte1 = new Acompte;
  yearsList: string[] = []
  numList: string[] = ['1', '2', '3']
  tvaLetters: string[] = ['A', 'P', 'B', 'D', 'N']
  categoryLetters: string[] = ['M', 'P', 'C', 'N', 'E']


  constructor(private router: Router, public declariService : DeclariService) {

  }

  ngOnInit(): void {
    this.acompte1.assietteimpot = 0;
    this.acompte1.plusvalue = 0;
    this.acompte1.moisvalue = 0;
    this.acompte1.total = 0;

    this.acompte1.impot = 0;
    this.acompte1.impot30 = 0;


    this.acompte1.excedent = 0;
    this.acompte1.retenuesource = 0;
    this.acompte1.import10 = 0;
    this.acompte1.cent1 = 0;

    this.acompte1.report = 0;

    this.acompte1.Payer_reporter = 0;


    //year from 2000 to 2100
    for (let i = 2000; i <= 2100; i++) {
      this.yearsList.push(i.toString())
    }

    //Initiate the form
    //this.a.code ="" ;
    //this.a.year ="" ;
    //this.a.num ="" ;
    //this.a.matricule ="" ;
    //this.a.tva ="" ;
    this.a.categorie ="" ;
    this.a.name ="" ;
    this.a.adress ="" ;
    this.a.postal ="" ;
    this.a.act ="" ;

  }



  totale() {

    /*a.assietteimpot = 0;
    a.plusvalue = 0;
    a.moisvalue = 0;*/
    console.log("Salem");
    console.log(this.acompte1);
    this.acompte1.total = this.acompte1.assietteimpot - this.acompte1.plusvalue + this.acompte1.moisvalue;

    this.acompte1.impot30 = this.acompte1.impot * 0.3;

    this.acompte1.Payer_reporter = this.acompte1.total + this.acompte1.impot30 - this.acompte1.excedent - this.acompte1.retenuesource - this.acompte1.import10 - this.acompte1.cent1 - this.acompte1.report;

    this.a.totale = this.acompte1.Payer_reporter;

  }



  effacer() {
    this.acompte1.assietteimpot = 0;
    this.acompte1.plusvalue = 0;
    this.acompte1.moisvalue = 0;
    this.acompte1.total = 0;

    this.acompte1.impot = 0;
    this.acompte1.impot30 = 0;


    this.acompte1.excedent = 0;
    this.acompte1.retenuesource = 0;
    this.acompte1.import10 = 0;
    this.acompte1.cent1 = 0;

    this.acompte1.report = 0;

    this.acompte1.Payer_reporter = 0;

    //teste
    /*console.log(this.a.code);
    console.log(this.a.year);
    console.log(this.a.num);
    console.log(this.a.matricule);
    console.log(this.a.tva);
    console.log(this.a.categorie);
    console.log(this.a.name);
    console.log(this.a.adress);
    console.log(this.a.postal);
    console.log(this.a.act);*/

    //
    this.a.code = "";
    this.a.year = "";
    this.a.num = "";
    this.a.matricule = "";
    this.a.tva = "";
    this.a.categorie = "";
    this.a.name = "";
    this.a.adress = "";
    this.a.postal = "";
    this.a.act = "";

  }


  //Ajouter un acompte
  Ajouter() {

    
    
    this.a.mail = localStorage.getItem('loggedPersonne')!.toString();
    
    //this.declariService.ajouterAcompte(this.a);

    this.declariService.ajouterAcompte(this.a).subscribe(liv => {

      //Reload after adding Task
      this.router.navigate(['/home/acompteall']).then(() => {
        //window.location.reload();
      });
      

    });

  }
}
