import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paneladmin',
  standalone: true,
  imports: [],
  templateUrl: './paneladmin.component.html',
  styleUrl: './paneladmin.component.css'
})
export class PaneladminComponent {
  constructor(private router: Router){

  }

  clientespage(){
    this.router.navigate(['/paneladmin/clientes']);
  }

  productospage(){
    this.router.navigate(['/paneladmin/productos']);
  }

  ventaspage(){
    this.router.navigate(['/paneladmin/ventas']);
  }
}
