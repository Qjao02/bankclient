import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Home',  icon: 'dashboard', class: '' },
    { path: 'novo-cliente-form', title: 'Novo Cliente',  icon:'person', class: '' },
    { path: 'table-list', title: 'Lista Clientes',  icon:'content_paste', class: '' },
    { path: 'novo-funcionario-form', title: 'Novo Funcionario',  icon:'account_box', class: '' },
    { path: 'table-list-funcionario', title: 'Lista Funcionario',  icon:'work', class: '' },
    { path: 'novo-administrador-form', title:'Novo Administradores', icon:'work_outline', class:''},
    { path: 'table-list-administrador', title:'Lista Administradores', icon:'work_outline', class:''},
    { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    //{ path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
];
