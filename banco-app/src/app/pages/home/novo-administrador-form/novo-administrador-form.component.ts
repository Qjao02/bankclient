import { Component, OnInit } from '@angular/core';
import { Administrador} from '../tabble-list-administrador/administrador'
import { NovoAdministradorFormService } from './novo-administrador-form.service'

@Component({
  selector: 'app-novo-administrador-form',
  templateUrl: './novo-administrador-form.component.html',
  styleUrls: ['./novo-administrador-form.component.css']
})
export class NovoAdministradorFormComponent implements OnInit {

  model = new Administrador()

  constructor(private upService : NovoAdministradorFormService) { }

  ngOnInit() {
  }

  onClick(administrador : Administrador){
      console.log("bump")
      this.upService.addAdministrador(administrador);
      console.log()
    }  
}
