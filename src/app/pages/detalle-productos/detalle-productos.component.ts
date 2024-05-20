import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdctosService } from '../../service/prodctos.service';

@Component({
  selector: 'app-detalle-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-productos.component.html',
  styleUrl: './detalle-productos.component.css'
})
export class DetalleProductosComponent {

  servicios = inject(ProdctosService)

  ruta = inject(ActivatedRoute)

  id: any
  producto: any

  ngOnInit() {
    this.ruta.params.subscribe(p => {
      this.id = p['idProducto']
      this.servicios.getProductosID(this.id).subscribe(productos => {
        this.producto = productos
      })
    })
  }

}
