import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorDatosComponent } from './components/asesor-datos/asesor-datos.component';
import { AsesorFormComponent } from './components/asesor-form/asesor-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/asesor',
    pathMatch: 'full'
  },
  {
    path: 'asesor',
    component: AsesorDatosComponent
  },
  {
    path: 'asesor/add',
    component: AsesorFormComponent
  },
  {
    path: 'asesor/edit/:id',
    component: AsesorFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
