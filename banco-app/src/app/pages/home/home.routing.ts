import { NgModule, Component } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { NovoClienteFormComponent } from './novo-cliente-form/novo-cliente-form.component';
import { TabbleListFuncionarioComponent } from './tabble-list-funcionario/tabble-list-funcionario.component'
import { NovoFuncionarioFormComponent } from './novo-funcionario-form/novo-funcionario-form.component';
import { TabbleListAdministradorComponent } from './tabble-list-administrador/tabble-list-administrador.component';
import { NovoAdministradorFormComponent } from './novo-administrador-form/novo-administrador-form.component';
import { RelatorioSimplesComponent } from './relatorio-simples/relatorio-simples.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'novo-cliente-form', component: NovoClienteFormComponent },
      { path: 'table-list', component: TableListComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'novo-funcionario-form', component: NovoFuncionarioFormComponent },
      { path: 'table-list-funcionario', component: TabbleListFuncionarioComponent },
      { path: 'novo-administrador-form', component: NovoAdministradorFormComponent },
      { path: 'table-list-administrador', component: TabbleListAdministradorComponent },
      { path: 'relatorio-simples', component: RelatorioSimplesComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'upgrade', component: UpgradeComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }

