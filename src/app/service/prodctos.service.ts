import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdctosService {
  constructor(private http: HttpClient) { }

  private API_NOSOTROS = 'http://localhost:3000/productos'

  //LEER - GET
  getProductos(): Observable<any> {
    return this.http.get(this.API_NOSOTROS)
  }

  getProductosID(id: any): Observable<any> {
    return this.http.get(`${this.API_NOSOTROS}/${id}`)
  }

  //GUARDAR - POST
  postProductos(persona: JSON): Observable<any> {
    return this.http.post(this.API_NOSOTROS, persona)
  }

  //ACTUALIZAR - PUT  
  putProductos(persona: any): Observable<any> {
    return this.http.put(`${this.API_NOSOTROS}/${persona.id}`, persona)
  }

  //ELIMINAR DELETE
  deleteProductosID(id: any): Observable<any> {
    return this.http.delete(` ${this.API_NOSOTROS}/${id}`)

  }
}
