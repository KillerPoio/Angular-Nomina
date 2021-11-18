import { Component, OnInit } from '@angular/core';
import { Asesor } from 'src/app/models/asesor';
import { AsesoresService } from 'src/app/services/asesores.service';

@Component({
  selector: 'app-asesor-form',
  templateUrl: './asesor-form.component.html',
  styleUrls: ['./asesor-form.component.css']
})
export class AsesorFormComponent implements OnInit {

  ases: Asesor ={
    nombre: '',
    Nivel_asesor: '',
    Salario_base: 0,

  }

  constructor(private asesoresService: AsesoresService ) { }

  ngOnInit(): void {
  }

  saveAsesor(){
    this.asesoresService.saveAsesor(this.ases).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }
}
