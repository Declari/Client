import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-declari',
  templateUrl: './declari.component.html',
  styleUrls: ['./declari.component.css']
})
export class DeclariComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


    //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    images = ["1.webp", "2.webp" , "3.webp", "4.jpg", ].map((n) => `../../assets/images/s${n}`);

}
