import { Component, OnInit } from '@angular/core';
import { Administrador } from './administrador'
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { TabbleListAdministradorService } from './tabble-list-administrador.service';

@Component({
  selector: 'app-tabble-list-administrador',
  templateUrl: './tabble-list-administrador.component.html',
  styleUrls: ['./tabble-list-administrador.component.css'],
  providers: [TabbleListAdministradorService]
})
export class TabbleListAdministradorComponent implements OnInit {

  public administradorArray = [];

  model = new Administrador()
  constructor(private upService: TabbleListAdministradorService) { }


  ngOnInit() {
    this.upService.getAdministrador().
      subscribe(data => this.administradorArray = data)
  }

  onClick(administrador: Administrador, el) {
    el.scrollIntoView();
    this.model.id = administrador.id
    this.model.login = administrador.login
    this.model.senha = administrador.senha
    this.model.agencia = administrador.agencia
  }

  putAdministrador(administrador: Administrador, el) {
    this.upService.putAdministrador(administrador, el)
    this.upService.getAdministrador().
      subscribe(data => this.administradorArray = data)
    //window.location.reload()
  }


  deleteAdministrador(administrador: Administrador) {
    this.upService.deleteAdministrador(administrador)
    this.upService.getAdministrador().subscribe(
      data => this.administradorArray
        = data
    )


  }
}
