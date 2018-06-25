import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Cliente } from './cliente';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NovoClienteService {

  private postsURL = "http://localhost:8000/api/v1/Clientes/"
  constructor(private http: HttpClient) { }

  addCliente(cliente: Cliente) {
  
    this.http.post(this.postsURL, {
      'nome': cliente.nome,
      'rua_mora': cliente.rua_mora,
      'cidade_mora': cliente.cidade_mora,
      'estado_mora': cliente.estado_mora,
      'funcionario_cadastrou':cliente.funcionario_cadastrou,
      'data_cadastro' : '2018-06-24'
    }).subscribe(
      (data: any) => {
        console.log(data)
      }
    )
  }
}
