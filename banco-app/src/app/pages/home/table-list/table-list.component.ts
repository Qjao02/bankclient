import { Component, OnInit } from '@angular/core';
import { TableListService } from "./table-list.service"
import { ClienteInterface } from '../../../cliente-interface';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [TableListService]
})
export class TableListComponent implements OnInit {

  public clientsArray = [];

  constructor(private tableListService : TableListService) { } 

  ngOnInit() {
    
    this.tableListService.getClients().
    subscribe(data => this.clientsArray = data)

  }

}
