import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { TipoCliente } from '../../interfaces/datoscliente/tipocliente';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoclienteserviceService {

  url: string = 'http://localhost:8081/tipocliente';

  constructor(private http: HttpClient) { }

  findAll(): Observable<TipoCliente[]> {
    return this.http.get<TipoCliente[]>(`${this.url}/findAll`);
  }

  findById(id: number): Observable<TipoCliente>{
    return this.http.get<TipoCliente>(`${this.url}/${id}`)
  } 

}
