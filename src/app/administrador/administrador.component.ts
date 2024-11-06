import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent {
  constructor(private router: Router){

  }

  paneladmin(){
    this.router.navigate(['/paneladmin']);
  }

  paneloperativo(){
    this.router.navigate(['/operativo/paneloperativo']);
  }

}
