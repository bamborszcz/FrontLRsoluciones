import { Injectable } from '@angular/core';
import { Footer } from '../models/footer.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FooterUrl extends Footer{codigo: number; foto: string; }

//export interface FooterUrl extends Footer{ codigo: number, foto: string; }
@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient ) {
  }

  public getFooterIMG(): Observable<any> {
   return this.http.get<FooterUrl>('http://127.0.0.1:8080/footerImg/');

  }
}
