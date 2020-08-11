import { Injectable } from '@angular/core';
import { PortadaCel } from '../models/portadaCel.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface PortadaCelUrl extends PortadaCel { codigo: number; fotoCel: string; responsivo: string; }

@Injectable({
  providedIn: 'root'
})
export class PortadaCelService {

  constructor(private http: HttpClient) { }

  public getPortadaCel(): Observable<any> {
    return this.http.get<PortadaCelUrl>('http://127.0.0.1:8080/portadaCel/1');

   }
}
