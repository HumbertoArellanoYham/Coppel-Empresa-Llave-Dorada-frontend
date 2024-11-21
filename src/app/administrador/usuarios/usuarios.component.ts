import {ChangeDetectionStrategy, AfterViewInit, Component, ViewChild, signal  } from '@angular/core';

import {ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import {MatMenuModule} from '@angular/material/menu';

import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTableModule, MatPaginatorModule,
    MatPaginator,
    MatMenuModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements AfterViewInit{
  displayedColumns: string[] = ['num', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'fecha_registro', 'tipo_usuario', 'clave'];
  dataSource:MatTableDataSource<UsuariosElement>;

  constructor(private router: Router){
    this.dataSource = new MatTableDataSource<UsuariosElement>(DATA);
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator ;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  //Password
  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  //Formulario
  usuarioForm = new FormGroup({

  });

  // Routes
  goClientes(){
    this.router.navigate(['/paneladmin/clientes']);
  }

  goProductos(){
    this.router.navigate(['/paneladmin/productos']);
  }

  goVentas(){
    this.router.navigate(['/paneladmin/ventas']);
  }

}

export interface UsuariosElement {
  num: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  fecha_registro: string;
  tipo_usuario: string;
  clave: string;
}

const DATA: UsuariosElement[] = [
  {
    num: 1,
    nombre: 'Humberto',
    apellidoPaterno: 'Arellano',
    apellidoMaterno: 'Montoya',
    fecha_registro: '20-11-2024', 
    tipo_usuario: 'Administrador',
    clave: 'admin'
  }
];