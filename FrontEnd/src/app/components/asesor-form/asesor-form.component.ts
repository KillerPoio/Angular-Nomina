import { Component, OnInit } from '@angular/core';
import { Asesor } from 'src/app/models/asesor';
import { AsesoresService } from 'src/app/services/asesores.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asesor-form',
  templateUrl: './asesor-form.component.html',
  styleUrls: ['./asesor-form.component.css']
})
export class AsesorFormComponent implements OnInit {

  ases: Asesor ={
    id: 0,
    nombre: '',
    Nivel_asesor: '',
    Salario_base: 0,

  }

  edit: boolean = false;

  constructor(private asesoresService: AsesoresService, private rout: Router, private active: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.active.snapshot.params;
    if(params["id"]){
      this.asesoresService.getAsesor(params["id"]).subscribe(
        res => {
          console.log(res);
          this.ases = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  saveAsesor(){
    this.asesoresService.saveAsesor(this.ases).subscribe(
      res => {
        console.log(res);
        this.rout.navigate(['/asesor']);
      },
      err => console.error(err)
    )
  }

  updateAsesor(){
    this.asesoresService.updateAsesor(this.ases.id, this.ases).subscribe(
      res => {
        console.log(res);
        this.rout.navigate(['/asesor']);
      },
      err => console.error(err)
    )
  }
}
