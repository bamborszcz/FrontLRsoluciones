import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from '../models/mail.interface';
import { RecaptchaService } from './recaptcha.service';

export interface MailUrl extends Mail { nombre: string; mail: string;telefono: number;localidad: string; provincia: string; comentario: string
}
@Injectable({
  providedIn: 'root'
})
export class MailService {


  constructor(private http: HttpClient, private capcha: RecaptchaService) {

  }

  public sendMail(mail: MailUrl): Observable<any> {
   return this.http.post<MailUrl>('http://127.0.0.1:8080/mail/?g-recaptcha-response='+this.capcha.getRecaptcha(), {// antes debo pasarle el capcha por parametro, la variable es "g-recaptcha-response"
     nombre: mail.nombre,
     mail: mail.mail,
     telefono: mail.telefono,
     localidad: mail.localidad,
     provincia: mail.provincia,
     comentario: mail.comentario,

   });

  }
}
