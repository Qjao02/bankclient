import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ViewInterface } from './view-interface';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelatorioSimplesService {

  constructor(private http : HttpClient) { }


  getViewClientesFisicos() : Observable<ViewInterface[]>{
    return this.http.get<ViewInterface[]>('http://localhost:8000/api/v1/Relatorios/')
  }
}
