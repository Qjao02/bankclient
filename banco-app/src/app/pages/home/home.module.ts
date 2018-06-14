import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';
import { HttpClientModule } from '@angular/common/http';
import { TableListPipe } from './table-list/table-list.pipe';
import { PopupClienteComponent } from './popup-cliente/popup-cliente.component';

@NgModule({
  imports: [
    [CommonModule],
    RouterModule,
    
    ComponentsModule,
    HomeRoutingModule,
    RouterModule,

    HttpClientModule,
  ],
  declarations: [
    HomeComponent, 
    DashboardComponent, 
    UserProfileComponent, 
    TableListComponent, 
    TypographyComponent, 
    IconsComponent, 
    MapsComponent, 
    NotificationsComponent, 
    UpgradeComponent, WelcomeHomeComponent, TableListPipe, PopupClienteComponent,
  ],

  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
