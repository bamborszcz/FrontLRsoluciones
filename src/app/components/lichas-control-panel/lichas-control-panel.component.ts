import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { LichasControlPanelService } from 'src/app/service/lichas-control-panel.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { FileUploadModel } from 'src/app/models/fileUploadModel';

import { UploadFileService } from 'src/app/service/upload-file.service';


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
  registerForm: FormGroup;
  registerForm2: FormGroup;

  constructor(public appService: AppService, public lichaPanel: LichasControlPanelService, private http: HttpClient, private upLoadServ: UploadFileService, private formBuilder: FormBuilder) {

    this.appService.setAppView(false);
    this.lichaPanel.setLichaPanel(true);
   }

//////////////formulario////////////////////////////////////////////////////////

public formLoad(select: string): FormGroup {

 switch(select) {
      case "Categoria": {

         this.registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
          codigo: [],
          categoria: ['']
  });
         break;
      }
      case "Footer": {

        this.registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
          codigo: [],
          foto: ['']
 });
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
}

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



  basic(){
    this.uploadFiles();
    console.log(this.toppings.value);
    this.registerForm2 = this.formLoad("");

  }
}
