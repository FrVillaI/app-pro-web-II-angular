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
import { AgregarProductosComponent } from './pages/agregar-productos/agregar-productos.component';
import { EditarProductosComponent } from './pages/editar-productos/editar-productos.component';
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';
import { RegistroBaseComponent } from './pages/registro-base/registro-base.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "productos", component: ProductosComponent },
    { path: "nosotros", component: NosotrosComponent },
    { path: "formulario", component: FormularioComponent,canActivate:[rolGuarUs] },
    { path: "contactos", component: ContactosComponent },
    { path: "detalle-productos/:idProducto", component: DetalleProductosComponent },
    { path: "usuarios", component: UsuariosComponent,canActivate:[rolGuardAd] },
    { path: "login", component: LoginComponent,canActivate:[loginGuard] },
    { path: "registro", component: RegistroBaseComponent,canActivate:[registroGuard]},
    { path: "carrito", component: CarritoComponent,canActivate:[rolGuarUs] },
    { path: "agregar-producto", component: AgregarProductosComponent,canActivate:[rolGuardAd]},
    { path: "editar-producto/:idProducto", component: EditarProductosComponent,canActivate:[rolGuardAd] },
    { path: "editar-usuario/:idUsuario", component: EditarUsuariosComponent,canActivate:[rolGuardAd] },
    { path: "registro-ad", component: RegistroComponent,canActivate:[rolGuardAd] },
    { path: "lista-productos", component: ListaProductosComponent,canActivate:[rolGuardAd] },
    { path: "agregar-productos", component: AgregarProductosComponent,canActivate:[rolGuardAd] },


    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];
