import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio = inject(LoginService)
  router = inject(Router)

  email: any
  password: any
  token: any

  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(p => {
      this.token = p.accessToken
      if (this.token != '') {
        localStorage.setItem("token", 'true')
        if(p.user.tipoUser == "admin"){
          localStorage.setItem("rol", 'admin')
        }else if(p.user.tipoUser == "usuario"){
          localStorage.setItem("rol", 'usuario')
        }
        //this.router.navigateByUrl('privado')
        window.location.href = 'home'

      }
    }
    )
  }
}


