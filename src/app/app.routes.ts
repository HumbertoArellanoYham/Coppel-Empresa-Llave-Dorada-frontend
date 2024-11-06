import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { PaneladminComponent } from './administrador/paneladmin/paneladmin.component';
import { PaneloperaComponent } from './operativo/panelopera/panelopera.component';

export const routes: Routes = [
    // Rutas para administrador
    {path: '', redirectTo: 'admin', pathMatch: 'full'},
    {path: 'admin', component: AdministradorComponent},
    {path: 'paneladmin', component: PaneladminComponent},
    // {path: 'admin/paneladmin/clientes', component: OperativoComponent},
    // {path: 'admin/paneladmin/productos', component: OperativoComponent},
    // {path: 'admin/paneladmin/ventas', component: OperativoComponent},
    

    // Rutas para operativo
    {path: 'operativo/paneloperativo', component: PaneloperaComponent},
    // {path: 'operativo/paneloperativo/clientes', component: OperativoComponent},
    // {path: 'operativo/paneloperativo/productos', component: OperativoComponent},
    // {path: 'operativo/paneloperativo/ventas', component: OperativoComponent},
];
