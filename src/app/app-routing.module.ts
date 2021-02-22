import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosActualesComponent } from './components/datos-actuales/datos-actuales.component';
import { DatosListComponent } from './components/datos-list/datos-list.component';
import { LoginComponent } from './components/login/login.component';
import { DatosEditComponent } from './components/datos-edit/datos-edit.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'datos-list', component: DatosListComponent},
  {path: 'datos-actuales', component: DatosActualesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'datos-edit', component: DatosEditComponent},  //insercion
  {path: 'datos-edit/:id', component: DatosEditComponent}, //actualizacion

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
