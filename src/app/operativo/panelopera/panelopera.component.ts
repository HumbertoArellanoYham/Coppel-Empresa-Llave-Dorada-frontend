import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panelopera',
  standalone: true,
  imports: [],
  templateUrl: './panelopera.component.html',
  styleUrl: './panelopera.component.css'
})

export class PaneloperaComponent {

  constructor(private router: Router){

  }

  clientespage(){
    this.router.navigate(['/operativo/paneloperativo/clientes']);
  }

  productospage(){
    this.router.navigate(['/operativo/paneloperativo/productos']);
  }

  ventaspage(){
    this.router.navigate(['/operativo/paneloperativo/ventas']);
  }
}
