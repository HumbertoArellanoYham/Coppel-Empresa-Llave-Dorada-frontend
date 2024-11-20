import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:8081/usuario/findbyname/";

  isValited: boolean = false;

  constructor(private http: HttpClient) { }

  findByNameLoginValidator(name: string): Observable<boolean>{
    return this.http.get<boolean>(`${this.url}/findbyname/${name}`);
  }

}
