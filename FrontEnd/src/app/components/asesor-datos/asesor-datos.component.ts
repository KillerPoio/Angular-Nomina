import { Component, OnInit } from '@angular/core';
import { AsesoresService } from 'src/app/services/asesores.service';

@Component({
  selector: 'app-asesor-datos',
  templateUrl: './asesor-datos.component.html',
  styleUrls: ['./asesor-datos.component.css']
})
export class AsesorDatosComponent implements OnInit {

  ases : any = [];

  constructor(private asesorService: AsesoresService) { }

  ngOnInit(): void {
    this.asesorService.getAsesores().subscribe(
      res => {
        this.ases = res;
      },
      err => console.error(err)

    );
    
  }

}
