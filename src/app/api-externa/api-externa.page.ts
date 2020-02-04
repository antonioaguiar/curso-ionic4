 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  resultado: any;

  constructor()  { }

  ngOnInit() {
  }

  btnGet(){
    
    this.resultado = 'GET - Resultado vazio!';
  }

  btnPost(){
   
    this.resultado = 'POST - Resultado vazio!';
  }
}
