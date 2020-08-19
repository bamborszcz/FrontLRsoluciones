import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { LichasControlPanelService } from 'src/app/service/lichas-control-panel.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { FileUploadModel } from 'src/app/models/fileUploadModel';

import { UploadFileService } from 'src/app/service/upload-file.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { FooterService } from 'src/app/service/footer.service';


@Component({
  selector: 'app-lichas-control-panel',
  templateUrl: './lichas-control-panel.component.html',
  styleUrls: ['./lichas-control-panel.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({opacity:100})),
      transition('*  => void', [
        animate(300, style({opacity: 0}))
      ])
    ])
  ]
})


export class LichasControlPanelComponent implements ErrorStateMatcher {

  @Input() text = 'Upload';
  @Input() param = 'file';
  @Output() complete = new EventEmitter<string>();
  //fileInformation: any;
  public files: Array<FileUploadModel> = [];

  // form control
  toppings = new FormControl();
  toppingList: string[] = ['Categoria', 'Footer', 'Portada Celular', 'Portada PC', 'Producto'];
  registerForm: FormGroup = null;
  public categoria: string;
  constructor(public appService: AppService, public lichaPanel: LichasControlPanelService, private http: HttpClient, private upLoadServ: UploadFileService, private formBuilder: FormBuilder, private cateServ: CategoriaService, private footer: FooterService) {

    this.appService.setAppView(false);
    this.lichaPanel.setLichaPanel(true);

    //this.registerForm2 = this.formLoad(this.toppings.value[0]);
   }

   registerForm2 = this.formBuilder.group({// deben ser igual a los de la interfaz
    codigo: [],
    categoria: [''],
    foto: ['']
  });

   ngOnInit(): void {
/*
    console.log("inicio");
    this.registerForm2 = this.formBuilder.group({});
    console.log(this.registerForm2);
    console.log(this.registerForm2.value);
     //this.registerForm2 = this.formLoad('Categoria');

     console.log(this.registerForm2);
     console.log(this.registerForm2.value);
     //this.registerForm2 = this.formLoad('Footer');

     console.log(this.registerForm2);
     console.log(this.registerForm2.value);
     //this.registerForm2 = this.formBuilder.group({});*/
  }
//////////////formulario////////////////////////////////////////////////////////

public getReg (): FormGroup {
return this.registerForm2;
}
public setReg (reg: FormGroup) {

  this.registerForm2 = reg;
  }

public select(): boolean {
  let select = true;
  if (this.toppings.value !== null) {
    if (this.toppings.value[0]!=='Producto') {
    select = false;
  }
  }
  return select;
}
/*public formLoad(select: string): FormGroup {

 switch(select) {

      case "Categoria": {

         this.registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
         // codigo: new FormControl(),
          //categoria: new FormControl(),
        //  codigo: [],
         // categoria: ['']
  });
  this.categoria = "categoria"
         break;
      }
      case "Footer": {

        this.registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
          codigo: [],
          foto: ['']
 });
 this.registerForm2 = this.registerForm;
        break;
     }

     case "Portada Celular": {

      this.registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
        codigo: [],
        foto_cel: [''],
        responsivo: ['cel']
});
      break;
   }

   case "Portada PC": {

    this.registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
      codigo: [],
      fotoWeb: [''],
      responsivo: ['pc']
});
    break;
 }

 case "Producto": {

  this.registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
    codigo: [],
    categoria: {
      id: [],
      categoria: ['']
    },
    descripcion: [''],
    foto: [''],
    producto: ['']
});
  break;
}

    }
  return this.registerForm;
}*/

//////////////////////////////////////////////////////////////////////////////////////
   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }


  matcher = new ErrorStateMatcher();

  onClick() {

    if (this.upLoadServ.files.length>0) {
      this.upLoadServ.removeFileFromArray(this.upLoadServ.files[0]);
    }

 const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;

    fileUpload.onchange = () => {

    for (let index = 0; index < fileUpload.files.length ; index++) {
      const file = fileUpload.files[index];

      this.upLoadServ.files.push({
        data: file,
        state: 'in',
        inProgerses: false,
        progress: 0,
        canRetry: false,
        canCancel: false
      });
        this.files = this.upLoadServ.files;
    }
  };

  fileUpload.click();
  }

  cancelFile(file: FileUploadModel) {
    file.sub.unsubscribe();
    this.upLoadServ.removeFileFromArray(file);
    file.canCancel=false;
  }


  retryFile(file: FileUploadModel) {
   this.upLoadServ.uploadFile(file, this.param);
    file.canRetry = false;
  }

  private uploadFiles() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.value = '';

    this.upLoadServ.files.forEach( file => {
      this.upLoadServ.uploadFile(file, this.param);
        });
}


public getForm(){
 // this.registerForm2 = this.formBuilder.group({});
//console.log(this.registerForm2.value);
console.log("algo");


  //this.registerForm2 = this.formLoad(this.toppings.value[0]);
 // this.setReg(this.formLoad(this.toppings.value[0]));
//console.log("lala"+this.toppings.value[0]);
//console.log(this.registerForm2.value);

//console.log(this.getReg().value);

/*this.registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
  // codigo: new FormControl(),
   //categoria: new FormControl(),
  codigo: [],
   categoria: ['']
});

this.setReg(this.registerForm);*/
}

  basic(){
    this.uploadFiles();
    console.log(this.toppings.value[0]);

    //this.registerForm2 = this.formBuilder.group({});
console.log(this.registerForm2.value);

if (this.toppings.value[0] === 'Categoria') {
this.cateServ.sendCategoria(this.getReg().value).toPromise().then((data: any) => {
      console.log(data);


    });
} else if(this.toppings.value[0] === 'Footer') {
  this.footer.sendFooter(this.getReg().value).toPromise().then((data: any) => {
    console.log(data);


  });
}
    //this.registerForm2 = this.formLoad(this.toppings.value[0]);

  }
}
