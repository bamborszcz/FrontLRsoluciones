import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { HttpClient } from '@angular/common/http';
import { Collection } from 'ngx-pagination/dist/paginate.pipe';
import { Observable } from 'rxjs';

export interface ProductosUrl extends Producto {codigo: number; categoria: Object; descripcion: string;foto: string; producto: string; }
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoColection: Collection<ProductosUrl>;
  constructor(private http: HttpClient) { }

  public getProductoCategoriaId(id: number): Observable<any> {
    return this.http.get<ProductosUrl>('http://127.0.0.1:8080/productos/'+id);
   }


}
