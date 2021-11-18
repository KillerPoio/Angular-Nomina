import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { AsesorFormComponent } from './components/asesor-form/asesor-form.component';
import { AsesorDatosComponent } from './components/asesor-datos/asesor-datos.component';

import { AsesoresService } from './services/asesores.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    AsesorFormComponent,
    AsesorDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AsesoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
