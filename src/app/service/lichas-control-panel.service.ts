import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LichasControlPanelService {

  private lichaPanel: boolean;
  constructor() { }

  getLichaPanel() {
    return this.lichaPanel;
  }
  setLichaPanel(lichaPanel: boolean) {
    this.lichaPanel = lichaPanel;
  }
}
