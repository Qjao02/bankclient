import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {ClienteInterface} from "../../../cliente-interface";
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class TableListService {
  private postsURL ="http://localhost:8000/api/v1/Clientes/";

  constructor(private http: HttpClient) { }

  getClients() : Observable<ClienteInterface[]>{
    return this.http.get<ClienteInterface[]>(this.postsURL);
  }
  

  
}

