import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  servicio = inject(LoginService)

  email: any
  password: any
  edad: any
  genero: any
  tipoUser: any
  token: any
  nombre: any
  apellido: any

  registro(datos: any) {
    this.servicio.postUsers2(datos.value).subscribe()
    window.location.href = 'login'
  }
}
