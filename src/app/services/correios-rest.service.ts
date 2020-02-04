import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreiosRestService {

  baseUrl = '/servicos';

  constructor(private http: HttpClient) { }
 
  listaUFs() {
    // {{baseUrl}}/servicos/dne/getListaUnidadesFederacao?Token=B597CDF485BE1B72E7A0A78F96CE209E
    const token = this.getToken();
    const url = this.baseUrl + '/rest/servicos/dne/getListaUnidadesFederacao?Token=' + token;
    return this.http.get(url).toPromise();
  }

  listaFaixaCEPUF(uf: string) {
    // {{baseUrl}}/servicos/dne/getListaUnidadesFederacao?Uf=MT&Token=B597CDF485BE1B72E7A0A78F96CE209E
    const token = this.getToken();
    const url = this.baseUrl + '/rest/servicos/dne/getListaUnidadesFederacao?Uf=' + uf + '&Token=' + token;
    return this.http.get(url).toPromise();
  }

  // POST
  logradouroPorCep(cep: string) {
    // {{baseUrl}}/servicos/dne/getLogradouroPorCep
    const token = this.getToken();
    const vheaders = new HttpHeaders({ 'Content-Type': 'Application/json' });
    const url = this.baseUrl + '/rest/servicos/dne/getLogradouroPorCep';
    const body = {
      Cep: cep,
      TOKEN: token
    };
    return this.http.post(url, body, { headers :  vheaders }).toPromise();
  }
  getToken() {
    return 'B597CDF485BE1B72E7A0A78F96CE209E';
  }
}
