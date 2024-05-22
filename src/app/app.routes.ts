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
    { path: "formulario", component: FormularioComponent },
    { path: "contactos", component: ContactosComponent },
    { path: "detalle-productos/:idProducto", component: DetalleProductosComponent },
    { path: "usuarios", component: UsuariosComponent },
    { path: "login", component: LoginComponent },
    { path: "registro", component: RegistroBaseComponent},
    { path: "carrito", component: CarritoComponent },
    { path: "agregar-producto", component: AgregarProductosComponent },
    { path: "editar-producto/:idProducto", component: EditarProductosComponent },
    { path: "editar-usuario/:idUsuario", component: EditarUsuariosComponent },
    { path: "registro-ad", component: RegistroComponent },
    { path: "lista-productos", component: ListaProductosComponent },
    { path: "agregar-productos", component: AgregarProductosComponent },


    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];
