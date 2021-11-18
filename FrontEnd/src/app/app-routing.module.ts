import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorDatosComponent } from './components/asesor-datos/asesor-datos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/asesor',
    pathMatch: 'full'
  },
  {
    path: 'asesor',
    component: AsesorDatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
