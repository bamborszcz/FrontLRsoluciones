import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.interface';
import { Collection } from 'ngx-pagination/dist/paginate.pipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface CategoriaUrl extends Categoria { codigo: number; categoria: string; }

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  productoColection: Collection<CategoriaUrl>;
  constructor(private http: HttpClient) { }

  public getCategorias(): Observable<any> {
    return this.http.get<CategoriaUrl>('http://127.0.0.1:8080/categorias/');
   }

   public sendCategoria(categoria: CategoriaUrl): Observable<any> {
    return this.http.post<CategoriaUrl>('http://127.0.0.1:8080/categorias', {// antes debo pasarle el capcha por parametro, la variable es "g-recaptcha-response"
    codigo: categoria.codigo,
    categoria: categoria.categoria
    });

   }
}
