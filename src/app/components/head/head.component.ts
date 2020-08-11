import { Component, OnInit } from '@angular/core';
import { PortadaWebService, PortadaWebUrl,  } from 'src/app/service/portadaWeb.service';
import { PortadaCelService, PortadaCelUrl } from 'src/app/service/portadaCel.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  private portadaUrl: string;
  responsivoPc: PortadaWebUrl;
  responsivoCel: PortadaCelUrl;

  constructor( private portadaWebService: PortadaWebService, private portadaCelService: PortadaCelService) { }

  ngOnInit(): void {


    this.portadaWebService.getPortadaWeb().subscribe(
      data => {
        this.responsivoPc = data;
         if (window.innerWidth > 768 && this.responsivoPc.responsivo==='pc') {
          this.setPortadaUrl(this.responsivoPc.fotoWeb);
          console.log('pc');
        }
      }
    );
    this.portadaCelService.getPortadaCel().subscribe(
      data => {
        this.responsivoCel = data;
         if (window.innerWidth < 768 && this.responsivoCel.responsivo==='cel') {
          this.setPortadaUrl(this.responsivoCel.fotoCel);
          console.log('cel');
        }
      }
    );
  }

  /////////////////// GETERS Y SETERS //////////////////////////////
  private setPortadaUrl(portadaUrl: string): void {
    this.portadaUrl = portadaUrl;
  }

  public getPortadaUrl(): string {
    return this.portadaUrl;
  }
  ///////////////////////////////////////////////////////////////////


  onResize(event) {
    const w = event.target.innerWidth;

      if (w < 768 && this.responsivoCel.responsivo==='cel') {
        this.setPortadaUrl(this.responsivoCel.fotoCel);
        console.log('cel');

    } else if (w > 768 && this.responsivoPc.responsivo==='pc') {
      this.setPortadaUrl(this.responsivoPc.fotoWeb);
      console.log('pc');

    }

    }

}
