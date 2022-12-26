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


  acompte1 = new Acompte;
  

  constructor(private router: Router) { 
    
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
    
  }

  

  totale() {

    /*a.assietteimpot = 0;
    a.plusvalue = 0;
    a.moisvalue = 0;*/
    console.log("Salem");
    console.log(this.acompte1);
    this.acompte1.total = this.acompte1.assietteimpot - this.acompte1.plusvalue + this.acompte1.moisvalue;

    this.acompte1.impot30 = this.acompte1.impot * 0.3;

    this.acompte1.Payer_reporter =this.acompte1.total + this.acompte1.impot30 - this.acompte1.excedent - this.acompte1.retenuesource - this.acompte1.import10 - this.acompte1.cent1 - this.acompte1.report;

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
    
  }
}
