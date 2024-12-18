import {AfterViewInit, Component, ViewChild } from '@angular/core';
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
  selector: 'app-productos',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTableModule, MatPaginatorModule,
    MatPaginator,
    MatMenuModule
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  host: {'some-binding': 'some-value'}
})
export class ProductosComponent implements AfterViewInit{
  displayedColumns: string[] = ['num', 'producto', 'precio', 'existencia', 'registro', 'categoria'];
  dataSource:MatTableDataSource<ProductsElement>;

  constructor(private router: Router){
    this.dataSource = new MatTableDataSource<ProductsElement>(DATA);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator ;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  productoForm = new FormGroup({

  });

  // Routes
  goClientes(){
    this.router.navigate(['/paneladmin/clientes']);
  }

  goUsuarios(){
    this.router.navigate(['/paneladmin/usuarios']);
  }

  goVentas(){
    this.router.navigate(['/paneladmin/ventas']);
  }

}

export interface ProductsElement {
  num: number;
  producto: string;
  precio: number;
  existencia: number;
  registro: string;
  categoria: string;
}

const DATA: ProductsElement[] = [
  {
    num: 1,
    producto: 'Iphone',
    precio: 1324.23,
    existencia: 4,
    registro: '20-11-2024',
    categoria: 'Celulares'
  },
];
