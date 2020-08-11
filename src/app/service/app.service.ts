import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private appView: boolean;
  constructor() { }


  getAppView() {
    return this.appView;
  }
  setAppView(appView: boolean) {
    this.appView = appView;
  }
}
