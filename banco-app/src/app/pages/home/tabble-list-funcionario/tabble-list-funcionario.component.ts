import { Component, OnInit, Inject } from '@angular/core';
import { TableListFuncionarioService } from "./table-list-funcionario.service"
import { ClienteInterface } from '../../../cliente-interface';
import { Funcionario } from './funcionario'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-table-list',
  templateUrl: './tabble-list-funcionario.component.html',
  styleUrls: ['./tabble-list-funcionario.component.css'],
  providers: [TableListFuncionarioService]
})
export class TabbleListFuncionarioComponent implements OnInit {

  public funcionarioArray = [];
  public actualCliente : ClienteInterface
  model = new Funcionario()
  constructor(private tableListService: TableListFuncionarioService ) { }

 
  ngOnInit() {

    this.tableListService.getFuncionario().
      subscribe(data => this.funcionarioArray = data)

  } 

  onClick(funcionario : Funcionario, el) {
    el.scrollIntoView();
    this.model.id = funcionario.id
    this.model.login = funcionario.login
    this.model.senha = funcionario.senha
    this.model.data_cadastro = funcionario.data_cadastro
    this.model.adm_cadastrou = funcionario.adm_cadastrou
  }

  putFuncionario(funcionario:Funcionario,el){
    this.tableListService.putFuncionario(funcionario,el)
    this.tableListService.getFuncionario().
      subscribe(data => this.funcionarioArray = data)
    //window.location.reload()
  }



  deleteFuncionario(funcionario:Funcionario){
    this.tableListService.deleteFuncionario(funcionario)
    this.tableListService.getFuncionario().subscribe(
      data=>this.funcionarioArray
       = data
    )

    //window.location.reload()
  }
 
}

