import { Injectable } from '@angular/core';
import { Recaptcha } from '../models/recaptcha.interface';

export interface captchaUrl extends Recaptcha{captcha: string; }

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  private captcha: string;
  constructor() { }

  public setRecaptcha(cap: string): void {
    this.captcha = cap;
  }


  public getRecaptcha(): string {
    return this.captcha;
  }
}
