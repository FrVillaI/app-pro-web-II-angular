import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito: any[] = [];

  constructor(private http: HttpClient) { }

  private API_CARRITO = 'http://localhost:3000/carrito'

  //LEER - GET
  getProductos(): Observable<any> {
    return this.http.get(this.API_CARRITO)
  }

  //GUARDAR - POST
  postProductos(productos: JSON): Observable<any> {
    return this.http.post(this.API_CARRITO, productos)
  }

  //ELIMINAR DELETE
  deleteProductoByID(id: number): void {
    // Simulamos la eliminación del producto del array
    this.carrito = this.carrito.filter(producto => producto.id !== id);
  }
}
