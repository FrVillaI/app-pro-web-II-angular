import { Component } from '@angular/core';
import { ProdctosService } from '../../service/prodctos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  constructor(private servicios: ProdctosService) { }
  productos: any

  ngOnInit() {
    this.servicios.getProductos().subscribe(p => {
      this.productos = p
    })
  }


}
