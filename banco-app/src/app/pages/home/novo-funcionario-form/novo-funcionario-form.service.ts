import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Funcionario } from './funcionario'
@Injectable({
  providedIn: 'root'
})
export class NovoFuncionarioFormService {
  
  public postsURL ='http://localhost:8000/api/v1/Funcionarios/'  
  constructor(private http : HttpClient) { }

  
  addFuncionario(funcionario: Funcionario) {

    this.http.post(this.postsURL, {
      'id' : funcionario.id,
      'login': funcionario.login,
      'senha': funcionario.senha,
      'adm_cadastrou':funcionario.adm_cadastrou,
      'data_cadastro' : '2018-06-24'
    }).subscribe(
      (data: any) => {
        console.log(data)
      }
    )
  }
}
