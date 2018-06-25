import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AdministradorInterface } from "../../../administrador-interface";
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { Administrador } from './administrador';

@Injectable({
  providedIn: 'root'
})
export class TabbleListAdministradorService {


  private postsURL = "http://localhost:8000/api/v1/Administradores/";
  constructor(private http: HttpClient) { }

  getAdministrador(): Observable<AdministradorInterface[]> {
    return this.http.get<AdministradorInterface[]>(this.postsURL);
  }

  
  putAdministrador(administrador: Administrador, el) {
    var stringrequest = this.postsURL.concat(administrador.id.toString())
    
    this.http.put(stringrequest, administrador).subscribe(
      (data: any) => {
        console.log(data)
      }
    )
    el.scrollIntoView();

  }

  deleteAdministrador(administrador:Administrador){
    var stringrequest = this.postsURL.concat(administrador.id.toString())
    console.log(stringrequest)
    this.http.delete(stringrequest).subscribe(
      (data : any)=> {
        console.log(data)
      }
    )
  }

}
