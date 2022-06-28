import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LaboralComponent } from './componentes/laboral/laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { interceptorProvider, InterceptorService } from './servicios/interceptor/interceptor.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NgChartsModule } from 'ng2-charts';

import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { PorfolioService } from './servicios/porfolio/porfolio.service';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './componentes/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EncabezadoComponent,
    LaboralComponent,
    EducacionComponent,
    LoginComponent,
    HabilidadesComponent,
    ProyectosComponent,    
    PortfolioComponent,    
    FooterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [PorfolioService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
