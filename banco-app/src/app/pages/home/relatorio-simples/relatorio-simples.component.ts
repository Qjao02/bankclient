import { Component, OnInit } from '@angular/core';
import { RelatorioSimplesService } from './relatorio-simples.service';

@Component({
  selector: 'app-relatorio-simples',
  templateUrl: './relatorio-simples.component.html',
  styleUrls: ['./relatorio-simples.component.css'],
  providers: [RelatorioSimplesService]
})
export class RelatorioSimplesComponent implements OnInit {

  public viewClienteFisicoList = []
  constructor(private upService: RelatorioSimplesService) { }



  ngOnInit() {


    this.upService.getViewClientesFisicos().
      subscribe((data: any) => this.viewClienteFisicoList = data)
    


  }

}
