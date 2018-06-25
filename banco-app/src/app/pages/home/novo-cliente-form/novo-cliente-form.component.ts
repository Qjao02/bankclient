import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { NovoClienteService } from './novo-cliente.service';

@Component({
  selector: 'app-novo-cliente-form',
  templateUrl: './novo-cliente-form.component.html',
  styleUrls: ['./novo-cliente-form.component.css'],
  providers: [NovoClienteService],

})
export class NovoClienteFormComponent implements OnInit {

  model = new Cliente()
  constructor(private upSerivce: NovoClienteService) { }

  ngOnInit() {
  }

  onClick(cliente: Cliente) {
    console.log("bump")
    cliente.data_cadastro = "2018-06-13"
    this.upSerivce.addCliente(cliente);
    console.log()
  }


  
}
