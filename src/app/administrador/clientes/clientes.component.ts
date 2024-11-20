import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Cliente } from '../../core/interfaces/datoscliente/cliente';
import { TipoCliente } from '../../core/interfaces/datoscliente/tipocliente';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { lastValueFrom } from 'rxjs';

import { ClienteServiceService } from '../../core/services/clienteservice/cliente-service.service'
import { TipoclienteserviceService } from '../../core/services/tipoclienteservice/tipoclienteservice.service'

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit{
  f: Date = new Date();
  clientes: Cliente[] = [];
  tipocliente: TipoCliente[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllClients();
    this.getAllClientsType();
  }

  constructor(@Inject(ClienteServiceService) private clienteservice: ClienteServiceService,
      @Inject(TipoclienteserviceService) private tipoclienteservice: TipoclienteserviceService 
  ){}

  cliente = {
    id_cliente: '',
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fecha_nacimiento: '',
    domicilio: '',
    id_tipoCliente: '',
    historial_cliente: '',
  }

  selectedclientstype = '';

  onSubmit(clienteForm: NgForm): void {
    this.clean(clienteForm);
    this.resetTheForm(clienteForm);
  }

  resetTheForm(clienteForm: NgForm){
    clienteForm.reset();
    clienteForm.resetForm();
  }

  clean(clienteForm: NgForm): void {
      this.resetTheForm(clienteForm);
  }

  // Obtener los clientes aqui comienza todo lo relacionado con la capa de servicio y las 
  // peticiones al backend.
   getAllClients() {
      this.clienteservice.findAll().subscribe({
        next: (response) => {this.clientes = response
          , console.log(response)
        }
      });
   }

   // Tipo de Clientes 
   getAllClientsType() { 
    this.tipoclienteservice.findAll().subscribe({
      next: (response) => {this.tipocliente = response,
      console.log(response)
      }
    })
   }

   // Obtener tipo de cliente con el arreglo que se definio arriba 
   getClienteTipoDescripcion(id: number): string {
    const tipoCliente = this.tipocliente.find(tc => tc.id_tipoCliente === id);
    return tipoCliente ? tipoCliente.des_tipoCliente : 'No disponible';
  }

  // Obtener el id del tipo de cliente seleccionado
  getIdTipoDescripcion(clientstype: string): number {
    const idTipoCliente = this.tipocliente.find(id => id.des_tipoCliente === clientstype);
    return idTipoCliente ? idTipoCliente.id_tipoCliente : 1; 
  }  
}
