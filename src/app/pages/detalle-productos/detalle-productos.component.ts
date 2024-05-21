import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdctosService } from '../../service/prodctos.service';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-detalle-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-productos.component.html',
  styleUrl: './detalle-productos.component.css'
})
export class DetalleProductosComponent {

  serviciosP = inject(ProdctosService)
  serviciosC = inject(CarritoService)

  ruta = inject(ActivatedRoute)

  id: any
  producto: any


  ngOnInit() {
    this.ruta.params.subscribe(p => {
      this.id = p['idProducto']
      this.serviciosP.getProductosID(this.id).subscribe(productos => {
        this.producto = productos
      })
    })
  }

  agregarC() {
    this.serviciosC.postProductos(this.producto).subscribe()
    window.location.href = 'productos'
  }
}
