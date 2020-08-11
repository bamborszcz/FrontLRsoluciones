import { Component, OnInit } from '@angular/core';

// paginador y spinner
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductoService } from 'src/app/service/producto.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-productos-up',
  templateUrl: './productos-up.component.html',
  styleUrls: ['./productos-up.component.css'],
})
export class ProductosUPComponent implements OnInit {
  private producto: any[];
  private categoria: any[];

  private seleccionCategoria: number; // almacana la categoria elegida para comparar con las categorias de los productos

  private pageActual: number=1; // en esta variable le asigno en q pag empieza el paginador
  private producto2: Object[]; // aca vuelvo a guardar mis productos para luego mostrarlos en el front por categorias y ordenados

  private prodResponsive: {} = {}; // este objeto lo uso para cambiar el [ngStyle] al hacerlo responsivo
  constructor( private spinner: NgxSpinnerService, private productoService: ProductoService, private categoriaService: CategoriaService, public appService: AppService) {}

  ngOnInit(): void {
// servicio de java
     this.categoriaService.getCategorias().subscribe(
      data => {
          //console.log(data);
          this.setCategoriaUrl(data);
          //console.log(this.getCategoriaUrl());

      }
    );
    // servicio de java
   this.productoService.getProductoCategoriaId(1).subscribe(
      data => {
        //console.log(data);
        //console.log(data[0].foto);

        this.setProductoUrl(data);
        //console.log(this.getProductoUrl());
        this.setSeleccionCategoria(1);
        this.elegirCategoria(1);
        console.log(this.getProductoUrl());
        console.log(data);

      }
    );


  }



  /////////////////// GETERS Y SETERS //////////////////////////////


  private setProductoUrl(producto: any[]): void {
    this.producto = producto;
  }

  public getProductoUrl(): any[] {
    return this.producto;
  }

  private setCategoriaUrl(categoria: any[]): void {
    this.categoria = categoria;
  }

  public getCategoriaUrl(): any[] {
    return this.categoria;
  }

  private setSeleccionCategoria(seleccionCategoria: number): void {
    this.seleccionCategoria = seleccionCategoria;
  }

  private getSeleccionCategoria(): number {
    return this.seleccionCategoria;
  }

  private setPageActual(pageActual: number): void {
    this.pageActual = pageActual;
  }

  public getPageActual(): number {
    return this.pageActual;
  }
  private setProducto2(producto2: Object[]): void {
    this.producto2 = producto2;
  }

  public getProducto2(): Object[] {
    return this.producto2;
  }

  private setProdResponsive(prodResponsive: {}) {
    this.prodResponsive = prodResponsive;
  }

  public getProdResponsive(): {} {
    return this.prodResponsive;
  }

  //////////////ELEGIR CATEGORIA//////////////////////////////

  public elegirCategoria(categoria: number): void { // elige la categoria de los botones
    console.log(categoria);

    this.setSeleccionCategoria(categoria);
    this.setPageActual(1); // cuando elige la categoria vuelve a setear el paginador en 1
    this.setProducto2([]); // cuando elige la categoria desechas los productos anteriores y solo muestra los seleccionados

      /*for (let i = 0; i < this.getProductoUrl().length; i++) { // recorre los productos extraidos de la bbdd los compara con la categoria seleccionada y los carga en los productos nuevos segun categoria para mostrar en las cards
        if (categoria===this.getProductoUrl()[i].categoria.codigo) { // si el producto viejo coincide con la categoria seleccionada lo carga en el producto nuevo
          this.getProducto2().push(this.getProductoUrl()[i]); // la diferencia entre el producto viejo y el nuevo es q el viejo trae todos los productos de la bbdd y el nuevo solo carga los productos de la categoria seleccionada
        }

      }*/
    /*this.productoService.getProductoInfo(categoria).subscribe(
        data => {
          //console.log(data);
          //console.log(data[0].foto);
          this.setProducto2(data);
          console.log(this.getProducto2());

         // this.setProductoUrl(data);
          //console.log(this.getProductoUrl());
          this.setSeleccionCategoria(this.getProducto2()[categoria].categoria.id);
          this.elegirCategoria(this.getProducto2()[categoria].categoria.id);
        }
      );*/

      this.productoService.getProductoCategoriaId(categoria).subscribe(
        data => {
          //console.log(data);
          //console.log(data[0].foto);

          this.setProductoUrl(data);
          //console.log(this.getProductoUrl());
         // this.setSeleccionCategoria(data[0].categoria.codigo);
          //this.elegirCategoria(data[0].categoria.codigo);
          console.log(this.getProductoUrl());
          console.log(data);

        }
      );

  }

  public checkCategoria(productoCategoria: number): boolean { // compara la categoria de los botones y compara para que solo muestre los productos de la categoria correspondiente
    let check: boolean;

    if (this.getSeleccionCategoria() === productoCategoria) {


      check = true;


    } else {

      check = false;
    }
    console.log(productoCategoria);

    return check;
  }


  // metodo que customiza e inicia el spinner
  public cargarPagina(event): void {
    this.spinner.show();
    this.setPageActual(event);
    setTimeout(() => {
      /** spinner ends after 1 seconds */
      this.spinner.hide();
    }, 1000);
  }

  public productosResponsive(): {} {

    if (window.innerWidth<768) {

      this.setProdResponsive({ // seteamos el objeto con los valores que luego usaremos en el [ngStyle]
        'width': '90%', 'float': 'left', 'margin-top': '5%','margin-left': '5%',
      });

    } else if (window.innerWidth>768) {
     this.setProdResponsive({
        'width': '40%', 'float': 'left', 'margin-top': '5%','margin-left': '5%',
      });
    }

    return this.getProdResponsive();
  }

}

