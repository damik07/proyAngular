import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LaboralComponent } from './componentes/laboral/laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NgChartsModule } from 'ng2-charts';
import { RegistroPersonasComponent } from './componentes/registro-personas/registro-personas.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { PorfolioService } from './servicios/porfolio/porfolio.service';
import { InterceptorService } from './servicios/interceptor/interceptor.service';
import { ModalComponent } from './componentes/modal/modal.component';



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
    RegistroPersonasComponent,
    PortfolioComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    
  ],
  providers: [PorfolioService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
