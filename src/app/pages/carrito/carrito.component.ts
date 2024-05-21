import { Component } from '@angular/core';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  constructor(private servicios: CarritoService) { }
  productos: any

  ngOnInit() {
    this.servicios.getProductos().subscribe(p => {
      this.productos = p
    })
  }

}