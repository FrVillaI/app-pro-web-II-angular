import { Component } from '@angular/core';
import { ProdctosService } from '../../service/prodctos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  
  constructor(private servicios: ProdctosService) { }
  productos: any

  ngOnInit() {
    this.servicios.getProductos().subscribe(p => {
      this.productos = p
    })
  }

  eliminar(id: any) {
    this.servicios.deleteProductosID(id).subscribe()
    window.location.reload()
  }

}
