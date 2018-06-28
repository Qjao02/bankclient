import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { ClienteInterface } from "../../../cliente-interface";
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Cliente } from './cliente'
import { Total } from '../../../total';

const httpOptions = {
  headers: new HttpHeaders({
    'Allow': 'GET, POST, HEAD, OPTIONS',
    'Content-Type': 'application/json',
    'Server': 'WSGIServer/0.2 CPython/3.6.4',
    'Vary': 'Accept, Cookie',
    'X-Frame-Options': 'SAMEORIGIN'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TableListService {
  private postsURL = "http://localhost:8000/api/v1/Clientes/";
  constructor(private http: HttpClient) { }

  getClients(): Observable<ClienteInterface[]> {
    return this.http.get<ClienteInterface[]>(this.postsURL);
  }

  getTotalCliente() : Observable<Total[]>{
    
    return this.http.get<Total[]>('http://localhost:8000/api/v1/totalClientes/')    
  }

  putCliente(cliente: Cliente, el) {
    var stringrequest = this.postsURL.concat(cliente.id.toString())
    this.http.put(stringrequest, cliente).subscribe(
      (data: any) => {
        console.log(data)
      }
    )
    el.scrollIntoView();


      
    }

    deleteCliente(cliente:Cliente){
      var stringrequest = this.postsURL.concat(cliente.id.toString())
      console.log(stringrequest)
      this.http.delete(stringrequest).subscribe(
        (data : any)=> {
          console.log(data)
        }
      )
    }
  }




  










