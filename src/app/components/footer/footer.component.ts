import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/service/footer.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private footerUrl: string;
  private redesResponsive: {} = {};



  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
              this.footerService.getFooterIMG().subscribe(
                data => {
                this.setFooterUrl(data.foto);
                }
              );
  }

  /////////////////// GETERS Y SETERS //////////////////////////////
  private setFooterUrl(footerUrl: string): void {
    this.footerUrl = footerUrl;
  }

  public gefooteraUrl(): string {
    return this.footerUrl;
  }

  private setRedesResponsive(redesResponsive: {}){
    this.redesResponsive = redesResponsive;
  }
  public getRedesResponsive(): {} {
    return this.redesResponsive;
  }
  ///////////////////////////////////////////////////////////////////
  ///////////////////css responsive//////////////////////////////////
  public redResponsive(): {} {

    if (window.innerWidth<768) {
      this.setRedesResponsive({
        'width': '12.5%', 'margin-right': '5%',
      });

    } else if (window.innerWidth>768) {
      this.setRedesResponsive({
        'width': '5%', 'margin-right': '2.5%',
      });
    }

    return this.getRedesResponsive();
  }
}



