import { Component } from '@angular/core';
import { LichasControlPanelService } from './service/lichas-control-panel.service';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LRSoluciones';

  constructor(public lichaPanel: LichasControlPanelService, public appService: AppService) {
    this.appService.setAppView(true);
    this.lichaPanel.setLichaPanel(false);
  }


  ngOnInit(): void {

  }
}
