import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Administrador } from '../tabble-list-administrador/administrador';


@Injectable({
  providedIn: 'root'
})
export class NovoAdministradorFormService {

  public postsURL = '//localhost:8000/api/v1/Administradores/'
  constructor(private http : HttpClient) { }

  addAdministrador(administrador: Administrador) {

    this.http.post(this.postsURL, {
      'id' : administrador.id,
      'login': administrador.login,
      'senha': administrador.senha,
      'agencia':administrador.agencia,
    }).subscribe(
      (data: any) => {
        console.log(data)
      }
    )
  }
}
