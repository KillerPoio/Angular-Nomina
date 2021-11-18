import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Asesor } from '../models/asesor';


@Injectable({
  providedIn: 'root'
})
export class AsesoresService {

  URL_API = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getAsesores(){
    return this.http.get('${this.URL_API}/asesor');
  }

  getAsesor(id: string){
    return this.http.get('${this.URL_API}/asesor/${id}');
  }

  deleteAsesor(id: string){
    return this.http.delete('${this.URL_API}/asesor/${id}');
  }

  saveAsesor(asesor: Asesor){
    return this.http.post('${this.URL_API}/asesor', asesor);
  }

  updateAsesor(id: string, updatedAseso: Asesor){
    return this.http.put('${this.URL_API}/asesor/${id}', updatedAseso);
  }
}
