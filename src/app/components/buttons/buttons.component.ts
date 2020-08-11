import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor( private router: Router ) { }

  private hoverEmpresa: boolean;
  private hoverContacto: boolean;
  private hoverProductos: boolean;



   private web: boolean;
   private cel: boolean;

  ngOnInit(): void {

    /*this.router.navigate(["/empresa"]); // reload to empresa!!!
    this.setHoverEmpresa(true);
     if(window.innerWidth<768) {
       this.setCel(true);

     }
     else if (window.innerWidth>768) {
        this.setWeb(true)
     }
*/

  }




public empresa(): void {

  console.log(this.router.url);


  this.router.navigate(['/empresa']);


  let btnEmpresa: HTMLElement = document.getElementById('empresa');
  btnEmpresa.setAttribute('style', 'background-color: #00AEEA; color: white;'); //asi manimulo el css con typescript!!! debo ponerlos en una linea como si los usaras en html
  let btnProducto: HTMLElement = document.getElementById('productos');
  btnProducto.setAttribute('style', 'background-color: transparent; color: #00AEEA;'); //asi manimulo el css con typescript!!! debo ponerlos en una linea como si los usaras en html
  let btnContacto: HTMLElement = document.getElementById('contacto');
  btnContacto.setAttribute('style', 'background-color: transparent; color: #00AEEA;'); //asi manimulo el css con typescript!!! debo ponerlos en una linea como si los usaras en html

  this.setHoverEmpresa(true);
  this.setHoverProductos(false);
  this.setHoverContacto(false);
}



public productos(): void {


  this.router.navigate(['/productos']);

  let btnEmpresa: HTMLElement = document.getElementById('empresa');
  btnEmpresa.setAttribute('style', 'background-color: transparent; color: #00AEEA;'); //asi manimulo el css con typescript!!! debo ponerlos en una linea como si los usaras en html
  let btnProducto: HTMLElement = document.getElementById('productos');
  btnProducto.setAttribute('style', 'background-color: #00AEEA; color: white;'); //asi manimulo el css con typescript!!! debo ponerlos en una linea como si los usaras en html
  let btnContacto: HTMLElement = document.getElementById('contacto');
  btnContacto.setAttribute('style', 'background-color: transparent; color: #00AEEA;'); //asi manimulo el css con typescript!!! debo ponerlos en una linea como si los usaras en html

  this.setHoverEmpresa(false);
  this.setHoverProductos(true);
  this.setHoverContacto(false);}



public contacto(): void {

  this.router.navigate(['/contacto']);

  let btnEmpresa: HTMLElement = document.getElementById('empresa');
  btnEmpresa.setAttribute('style', 'background-color: transparent; color: #00AEEA;'); //asi manimulo el css con typescript!!! debo ponerlos en una linea como si los usaras en html
  let btnProducto: HTMLElement = document.getElementById('productos');
  btnProducto.setAttribute('style', 'background-color: transparent; color: #00AEEA;'); //asi manimulo el css con typescript!!! debo ponerlos en una linea como si los usaras en html
  let btnContacto: HTMLElement = document.getElementById('contacto');
  btnContacto.setAttribute('style', 'background-color: #00AEEA; color: white;'); //asi manimulo el css con typescript!!! debo ponerlos en una linea como si los usaras en html

  this.setHoverEmpresa(false);
  this.setHoverProductos(false);
  this.setHoverContacto(true);
}

public mostrarBotonesWeb(): boolean {

  if (window.innerWidth>768) {
   this.setWeb(true);
  } else if (window.innerWidth<768) {
this.setWeb(false)  }
  return this.getWeb();

}

public mostrarBotonesCel(): boolean {

  if (window.innerWidth<768) {
   this.setCel(true);
  } else if (window.innerWidth>768) {
    this.setCel(false);
  }
  return this.getCel();
}

public setWeb(web: boolean): void {
  this.web = web;
}
public getWeb(): boolean {
  return this.web;
}
public setCel(cel: boolean): void {
  this.cel = cel;
}
public getCel(): boolean {
  return this.cel;
}

public setHoverEmpresa(hoverEmpresa: boolean): void {
  this.hoverEmpresa = hoverEmpresa;
}

public getHoverEmpresa(): boolean {
  return this.hoverEmpresa;
}

public setHoverContacto(hoverContacto: boolean): void {
  this.hoverContacto = hoverContacto;
}

public getHoverContacto(): boolean {
  return this.hoverContacto;
}

public setHoverProductos(hoverProductos: boolean): void {
  this.hoverProductos = hoverProductos;
}

public getHoverProductos(): boolean {
  return this.hoverProductos;
}

public navegationEmpresa(): {}{

  let style: {}= {};

  if (this.router.url==='/empresa') {
    style = {
      'background-color': '#00AEEA',
      'color': 'white'
      }
  } else {
    style = {
      'background-color': 'transparent',
      'color': '#00AEEA'
      }
  }

  return style;
}

public navegationProductos(): {}{

  let style: {}= {};

  if (this.router.url==='/productos') {
    style = {
      'background-color': '#00AEEA',
      'color': 'white'
      }
  } else {
    style = {
      'background-color': 'transparent',
      'color': '#00AEEA'
      }
  }

  return style;
}

public navegationContacto(): {}{

  let style: {}= {};

  if (this.router.url==='/contacto') {
    style = {
      'background-color': '#00AEEA',
      'color': 'white'
      }
  } else {
    style = {
      'background-color': 'transparent',
      'color': '#00AEEA'
      }
  }

  return style;
}

}
