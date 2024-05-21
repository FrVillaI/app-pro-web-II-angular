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

  productos: any;

  constructor(private servicios: CarritoService) { }

  ngOnInit() {
    this.productos = this.servicios.getProductos(); 
  }

}
