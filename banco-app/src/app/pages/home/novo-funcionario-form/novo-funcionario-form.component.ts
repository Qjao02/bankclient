import { Component, OnInit } from '@angular/core';
import { Funcionario } from './funcionario';
import {NovoFuncionarioFormService}         from './novo-funcionario-form.service'
@Component({
  selector: 'app-novo-funcionario-form',
  templateUrl: './novo-funcionario-form.component.html',
  styleUrls: ['./novo-funcionario-form.component.css'],
  providers: [NovoFuncionarioFormService]
})
export class NovoFuncionarioFormComponent implements OnInit {
  model = new Funcionario()

  constructor(private upService : NovoFuncionarioFormService) { }

  ngOnInit() {
  }

  onClick(funcionario : Funcionario){
      console.log("bump")
      funcionario.data_cadastro = "2018-06-13"
      this.upService.addFuncionario(funcionario);
      console.log()
    }  

}
