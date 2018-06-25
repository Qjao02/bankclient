import { Component, OnInit, Inject } from '@angular/core';
import { TableListService } from "./table-list.service"
import { ClienteInterface } from '../../../cliente-interface';
import { Cliente} from './Cliente'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [TableListService]
})
export class TableListComponent implements OnInit {

  public clientsArray = [];
  public actualCliente : ClienteInterface
  model = new Cliente()
  constructor(private tableListService: TableListService ) { }

 
  ngOnInit() {

    this.tableListService.getClients().
      subscribe(data => this.clientsArray = data)

  } 

  onClick(cliente : Cliente, el) {
    el.scrollIntoView();
    this.model.id = cliente.id
    this.model.nome = cliente.nome
    this.model.rua_mora = cliente.rua_mora
    this.model.cidade_mora = cliente.cidade_mora
    this.model.estado_mora = cliente.estado_mora
    this.model.funcionario_cadastrou = "45"
    this.model.data_cadastro = '2018-06-24'
  }

  putCliente(cliente:Cliente,el){
    this.tableListService.putCliente(cliente,el)
    this.tableListService.getClients().
      subscribe(data => this.clientsArray = data)
    
  }



  deleteCliente(cliente:Cliente){
    this.tableListService.deleteCliente(cliente)
    this.tableListService.getClients().subscribe(
      data=>this.clientsArray = data
    )

    //window.location.reload()
  }
 
}

