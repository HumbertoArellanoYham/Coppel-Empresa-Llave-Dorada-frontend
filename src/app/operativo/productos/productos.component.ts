import {AfterViewInit, ViewChild, Component } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements AfterViewInit{
  displayedColumns: string[] = ['num', 'producto', 'precio', 'existencia', 'registro', 'categoria'];
  dataSource:MatTableDataSource<ProductsElement>;

  constructor(){
    this.dataSource = new MatTableDataSource<ProductsElement>(DATA);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator ;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
