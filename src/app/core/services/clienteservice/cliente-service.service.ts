import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Cliente } from '../../interfaces/datoscliente/cliente';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {
  url: string = 'http://localhost:8081/cliente';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.url}/findAll`);
  }

  create(cliente: Cliente): Observable<Cliente>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Cliente>(`${this.url}/savecliente`, cliente, {headers});
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}/update`, cliente, { headers: new HttpHeaders({'Content-Type': 'application/json'}) });
  }

  remove(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/remove/${id}`);
  }
}
