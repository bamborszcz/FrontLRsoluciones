import { Injectable } from '@angular/core';
import { PortadaWeb } from '../models/portadaWeb.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface PortadaWebUrl extends PortadaWeb { codigo: number; fotoWeb: string; responsivo: string; }
@Injectable({
  providedIn: 'root'
})
export class PortadaWebService {

  constructor(private http: HttpClient) { }

  public getPortadaWeb(): Observable<any> {
    return this.http.get<PortadaWebUrl>('http://127.0.0.1:8080/portadaWeb/1');

   }
}
