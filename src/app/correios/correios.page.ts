import { CorreiosRestService } from './../services/correios-rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correios',
  templateUrl: './correios.page.html',
  styleUrls: ['./correios.page.scss'],
})
export class CorreiosPage implements OnInit {

  resultado: any;

  constructor(private correios: CorreiosRestService) { }

  ngOnInit() {
  }

  consultarUFs(){
      this.correios.listaUFs().then(
        (response) => {
          this.resultado = JSON.stringify(response);
        }
      ).catch(
        (error) => {
          console.log('erro:' + JSON.stringify(error));
        }
      );
  }

  consultarLogradouroPorCep(){
    this.correios.logradouroPorCep('78020400').then(
      (response) => {
        this.resultado = JSON.stringify(response);
      }
    ).catch(
      (error) => {
        console.log('erro:' + JSON.stringify(error));
      }
    );
  }

}
