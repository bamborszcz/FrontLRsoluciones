import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';
import { MailService } from 'src/app/service/mail.service';
import { Recaptcha } from 'src/app/models/recaptcha.interface';
import { RecaptchaService } from 'src/app/service/recaptcha.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-contacto-up',
  templateUrl: './contacto-up.component.html',
  styleUrls: ['./contacto-up.component.css']
})
export class ContactoUPComponent{

  private contactResponsive: {} = {};
  private iconResponsive: {} = {};
  private botonResponsive: {} = {};

  constructor( private mailService: MailService, private captcha: RecaptchaService, private formBuilder: FormBuilder, public appService: AppService ) { }

  registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
    nombre: [''],
    mail: [''],
    telefono: [''],
    localidad: [''],
    provincia: [''],
    comentario: ['']
  });


  /////////////////GETERS Y SETERS////////////////////////////////////////////////////////////

  private setContactResponsive(contactResponsive: {}): void {
    this.contactResponsive = contactResponsive;
  }
  public getContactResponsive(): {} {
    return this.contactResponsive;
  }
  private setIconResponsiveResponsive(iconResponsive: {}): void {
    this.iconResponsive = iconResponsive;
  }
  public getIconResponsiveResponsive(): {} {
    return this.iconResponsive;
  }
  private setBotonResponsiveResponsive(botonResponsive: {}): void {
    this.botonResponsive = botonResponsive;
  }
  public getBotonResponsive(): {} {
    return this.botonResponsive;
  }

public resolved(captchaResponse: string): void {
  //console.log(`Resolved captcha with response: ${captchaResponse}`); // este codigo debo usarlo en el backend!!!

 this.captcha.setRecaptcha(captchaResponse);
}

public contactoResponsive(): {} {

  if (window.innerWidth<768) {
    this.setContactResponsive({
      'width': '90%', 'margin-left': '5%',    });

  } else if (window.innerWidth>768) {
    this.setContactResponsive({
      'width': '50%', 'margin-left': '25%',
    });
  }

  return this.getContactResponsive();
}

public iconoResponsive(): {} {

  if (window.innerWidth<768) {
    this.setIconResponsiveResponsive({
      'color': '#00AEEA', 'width': '20%', 'height': '20%', });

  } else if (window.innerWidth>768) {
    this.setIconResponsiveResponsive({
      'color': '#00AEEA', 'width': '10%', 'height': '10%',
    });
  }

  return this.getIconResponsiveResponsive();
}

public enviarResponsive(): {} {

  if (window.innerWidth<768) {
   this.setBotonResponsiveResponsive({
      'background-color': '#00AEEA',
  'border-color': '#00AEEA',
  'font-size': '1.5rem',
  'border-radius': '35%',
  'width': '30%', });

  } else if (window.innerWidth>768) {
   this.setBotonResponsiveResponsive({

      'background-color': '#00AEEA',
  'border-color': '#00AEEA',
  'font-size': '2rem',
  'border-radius': '35%',
  'width': '30%',
    });
  }

  return this.getBotonResponsive();
}


public enviarForm(): void {
  this.mailService.sendMail( this.registerForm.value).toPromise().then((data: any) => {
    console.log(data);

  });
}
}
