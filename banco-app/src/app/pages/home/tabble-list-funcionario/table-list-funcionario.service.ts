import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { FuncionarioInterface } from "../../../funcionario-interface";
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Funcionario } from './funcionario'
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

export class TableListFuncionarioService {
  private postsURL = "http://localhost:8000/api/v1/Funcionarios/";
  constructor(private http: HttpClient) { }

  getFuncionario(): Observable<FuncionarioInterface[]> {
    return this.http.get<FuncionarioInterface[]>(this.postsURL);
  }



  putFuncionario(funcionario: Funcionario, el) {
    var stringrequest = this.postsURL.concat(funcionario.id.toString())
    
    this.http.put(stringrequest, funcionario).subscribe(
      (data: any) => {
        console.log(data)
      }
    )
    el.scrollIntoView();


      
    }

    deleteFuncionario(funcionario:Funcionario){
      var stringrequest = this.postsURL.concat(funcionario.id.toString())
      console.log(stringrequest)
      this.http.delete(stringrequest).subscribe(
        (data : any)=> {
          console.log(data)
        }
      )
    }
  }














