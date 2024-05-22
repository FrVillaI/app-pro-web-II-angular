import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-registro-base',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-base.component.html',
  styleUrl: './registro-base.component.css'
})
export class RegistroBaseComponent {
  servicio = inject(LoginService)

  email: any
  password: any
  edad: any
  genero: any
  tipoUser: string = 'usuario';
  token: any
  nombre: any
  apellido: any

  registro(datos: any) {
    this.servicio.postUsers2(datos.value).subscribe()
    window.location.href = 'login'
  }
}
