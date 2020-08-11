import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-empresa-up',
  templateUrl: './empresa-up.component.html',
  styleUrls: ['./empresa-up.component.css']
})
export class EmpresaUPComponent implements OnInit {

  constructor( public appService: AppService ) { }

  ngOnInit(): void {
  }


}
