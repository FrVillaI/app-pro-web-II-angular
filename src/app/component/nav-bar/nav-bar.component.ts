import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  service = inject(CarritoService)
  ocultar = localStorage.getItem('token')
  ocultar2 = localStorage.getItem('rol')
  carrito: any[] = [];


  constructor(private carritoService: CarritoService) {}

  cerrar() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.carrito.del
    //window.location.href = 'home'
  }

  getCarrito() {
    this.service.getProductos().subscribe(p => {
      this.carrito = p;
    });
  }

}
