import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  private API_TIENDA = 'http://localhost:8080/usuarios'

  getUsuarios(): Observable<any> {
    return this.http.get(this.API_TIENDA);
  }

  getUsuario(id: any): Observable<any> {
    return this.http.get(`${this.API_TIENDA}/${id}`);
  }

  createUsuario(usuario: any): Observable<any> {
    return this.http.post(this.API_TIENDA, usuario);
  }

  deleteUsuario(id: any): Observable<any> {
    return this.http.delete(`${this.API_TIENDA}/${id}`);
  }

}
