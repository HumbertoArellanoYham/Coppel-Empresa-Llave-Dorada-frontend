import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { AdministradorComponent } from './administrador/administrador.component';
import { PaneladminComponent } from './administrador/paneladmin/paneladmin.component';

import { ClientesComponent as ClientesAdminComponent } from './administrador/clientes/clientes.component';
import { ProductosComponent as ProductosAdminComponent} from './administrador/productos/productos.component';
import { VentasComponent as VentasAdminComponent} from './administrador/ventas/ventas.component';
import { UsuariosComponent as UsuariosAdminComponent} from './administrador/usuarios/usuarios.component';


import { PaneloperaComponent } from './operativo/panelopera.component';

import { ClientesComponent as ClientesOperaComponent } from './operativo/clientes/clientes.component';
import { ProductosComponent as ProductosOperaComponent } from './operativo/productos/productos.component';
import { VentasComponent as VentasOperaComponent} from './operativo/ventas/ventas.component';

export const routes: Routes = [
    // Rutas para administrador
    {path: '', redirectTo: 'admin', pathMatch: 'full'},
    {path: 'admin', component: AdministradorComponent},
    {path: 'paneladmin', component: PaneladminComponent},
    {path: 'paneladmin/usuarios', component: UsuariosAdminComponent},
    {path: 'paneladmin/clientes', component: ClientesAdminComponent},
    {path: 'paneladmin/productos', component: ProductosAdminComponent},
    {path: 'paneladmin/ventas', component: VentasAdminComponent},
    

    // Rutas para operativo
    {path: 'operativo/paneloperativo', component: PaneloperaComponent},
    {path: 'operativo/paneloperativo/clientes', component: ClientesOperaComponent},
    {path: 'operativo/paneloperativo/productos', component: ProductosOperaComponent},
    {path: 'operativo/paneloperativo/ventas', component: VentasOperaComponent},
];
