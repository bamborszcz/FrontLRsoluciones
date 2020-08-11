import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// para que funcione el ngModel
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';//logueo con face y gmail
import { GoogleLoginProvider,FacebookLoginProvider,AmazonLoginProvider,} from 'angularx-social-login';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { EmpresaUPComponent } from './components/empresa-up/empresa-up.component';
import { ProductosUPComponent } from './components/productos-up/productos-up.component';
import { ContactoUPComponent } from './components/contacto-up/contacto-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';


// libreria de paginador
import { NgxPaginationModule } from 'ngx-pagination';

// libreria de spinner "loading..."
import { NgxSpinnerModule } from 'ngx-spinner';

// esta libreria es para que funciones las animaciones del spinner!!
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// recaptcha!!
import { RecaptchaModule } from 'ng-recaptcha';

// enrrutamiento
import { AppRoutingModule } from './app-routing.module';

// metodos (post y get)
import {HttpClientModule} from '@angular/common/http';
import { LichasControlPanelComponent } from './components/lichas-control-panel/lichas-control-panel.component'


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ButtonsComponent,
    EmpresaUPComponent,
    ProductosUPComponent,
    ContactoUPComponent,
    FooterComponent,
    LichasControlPanelComponent,

  ],
  imports: [// solo se importan los modulos!!!
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    SocialLoginModule,
   ReactiveFormsModule,
    FormsModule, // para que funcione el ngModel
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    RecaptchaModule,
    HttpClientModule,
  ],

  providers: [

    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              'clientId'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
    ],
  bootstrap: [AppComponent],

})
export class AppModule { }
