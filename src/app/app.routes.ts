import { Routes } from '@angular/router';

import { ProductosComponent } from './component/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetalleProductosComponent } from './pages/detalle-productos/detalle-productos.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { loginGuard, registroGuard } from './guard/login.guard';
import { rolGuarUs, rolGuardAd } from './guard/rol.guard';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "productos", component: ProductosComponent },
    { path: "nosotros", component: NosotrosComponent },
    { path: "formulario", component: FormularioComponent },
    { path: "contactos", component: ContactosComponent },
    { path: "detalle-productos/:idProducto", component: DetalleProductosComponent },
    { path: "usuarios", component: UsuariosComponent,canActivate:[rolGuardAd] },
    { path: "login", component: LoginComponent,canActivate:[loginGuard] },
    { path:"registro",component:RegistroComponent,canActivate:[registroGuard]},
    { path: "carrito",component:CarritoComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];
