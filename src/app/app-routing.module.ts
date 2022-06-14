import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { RegistroPersonasComponent } from './componentes/registro-personas/registro-personas.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent, //canActivate:[GuardGuard]
    },
  {path:'iniciar-sesion', component:LoginComponent},
  {path:'', redirectTo:'portfolio', pathMatch:'full'},
  {path:'registro', component:RegistroPersonasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
